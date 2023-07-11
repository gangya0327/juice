var Dictionaries;
(function (Dictionaries) {
    Dictionaries["permanent"] = "permanent";
    Dictionaries["expire"] = "_expire_";
})(Dictionaries || (Dictionaries = {}));

class Storage {
    set(key, value, expire = Dictionaries.permanent) {
        const data = {
            value,
            [Dictionaries.expire]: expire,
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            const data = JSON.parse(value);
            const now = new Date().getTime();
            if (typeof data[Dictionaries.expire] === 'number' && data[Dictionaries.expire] > now) {
                return { message: '值存在', value: data.value };
            }
            else {
                this.remove(key);
                return { message: '值已过期', value: null };
            }
        }
        else {
            return { message: '值不存在', value: null };
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { Storage };
