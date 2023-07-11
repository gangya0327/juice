class Dispatch {
    list;
    constructor() {
        this.list = {};
    }
    on(name, fn) {
        const callback = this.list[name] || [];
        callback.push(fn);
        this.list[name] = callback;
    }
    emit(name, ...args) {
        let eventName = this.list[name];
        if (eventName) {
            eventName.forEach((fn) => {
                fn.apply(this, args);
            });
        }
        else {
            console.error(`名称错误 ${name}`);
        }
    }
    off(name, fn) {
        let eventName = this.list[name];
        if (eventName && fn) {
            let index = eventName.findIndex((fns) => fns === fn);
            eventName.splice(index, 1);
        }
        else {
            console.error(`名称错误 ${name}`);
        }
    }
    once(name, fn) {
        let de = (...args) => {
            fn.apply(this, args);
            this.off(name, de);
        };
        this.on(name, de);
    }
}
const obj = new Dispatch();
obj.once('post', (...args) => {
    console.log(111, args);
});
// const fn = (...args: Array<any>) => {
//   console.log('post', args);
// };
// obj.on('post', fn);
// obj.off('post', fn);
obj.emit('post', 1, false, { name: 'abc' });
obj.emit('post', 2, true, { name: 'abc' });
