class Dispatch2 {
    list;
    constructor() {
        this.list = {};
    }
    on(name, fn) {
        const cb = this.list[name] || [];
        cb.push(fn);
        this.list[name] = cb;
    }
    emit(name, ...args) {
        const events = this.list[name];
        if (events.length) {
            events.forEach((fn) => {
                fn.apply(this, args);
            });
        }
        else {
            console.error(name + ' 上没有绑定事件');
        }
    }
    off(name, fn) {
        const events = this.list[name];
        if (events.length && fn) {
            const index = this.list[name].findIndex((f) => f === fn);
            this.list[name].splice(index, 1);
        }
        else {
            console.error(`名称错误 ${name}`);
        }
    }
    once(name, fn) {
        let de = (...args) => {
            fn.apply(this, args);
            this.off(name, fn);
        };
        this.on(name, de);
    }
}
const obj2 = new Dispatch2();
const fn = (...args) => {
    console.log('fn函数执行 ', ...args);
};
obj2.once('test', fn);
obj2.emit('test', 11, 'aa', { name: 99 });
// obj2.off('test', fn);
obj2.emit('test', 22, 'aa', { name: 99 });
