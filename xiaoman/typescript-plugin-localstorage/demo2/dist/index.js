var Dictionaries;
(function (Dictionaries) {
    Dictionaries["permanent"] = "permanent";
    Dictionaries["expire"] = "_expire_";
})(Dictionaries || (Dictionaries = {}));

class Storage {
    get(key) {
        const value = localStorage.getItem(key);
        const now = Date.now();
        if (value) {
            const data = JSON.parse(value);
            if (typeof data.expire === 'number' && data.expire > now) {
                return {
                    message: '有效',
                    value: data.value,
                };
            }
            else {
                this.remove(key);
                return {
                    message: key + '的值已过期',
                    value: null,
                };
            }
        }
        else {
            return {
                message: '值不存在',
                value: null,
            };
        }
    }
    set(key, value, expire = Dictionaries.permanent) {
        const data = {
            value: value,
            expire: expire,
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}

export { Storage };
