function alias(options) {
    var entries = normalizeEntries(options.entries);
    return {
        name: 'alias',
        resolveId: function (source) {
            var entry = entries.find(function (e) {
                return e.match(source);
            });
            if (!entry)
                return source;
            return entry.replace(source);
        }
    };
}
function normalizeEntries(entries) {
    if (Array.isArray(entries)) {
        return entries.map(function (_a) {
            var find = _a.find, replacement = _a.replacement;
            return new Entry(find, replacement);
        });
    }
    else {
        return Object.keys(entries).map(function (key) {
            return new Entry(key, entries[key]);
        });
    }
}
var Entry = /** @class */ (function () {
    function Entry(find, replacement) {
        this.find = find;
        this.replacement = replacement;
    }
    Entry.prototype.match = function (filePath) {
        if (typeof this.find === 'string') {
            return filePath.startsWith(this.find);
        }
        else {
            return this.find.test(filePath);
        }
    };
    Entry.prototype.replace = function (filePath) {
        return filePath.replace(this.find, this.replacement) + '.js';
    };
    return Entry;
}());

export { alias as default };
