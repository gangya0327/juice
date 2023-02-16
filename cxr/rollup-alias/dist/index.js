function alias(options) {
    const entries = normalizeEntries(options.entries);
    return {
        name: 'alias',
        resolveId(source, importer) {
            const entry = entries.find((e) => {
                // return source.startsWith(e)
                return e.match(source);
            });
            if (!entry)
                return source;
            // return source.replace(key, entries[key]) + '.js'
            return entry.replace(source);
        }
    };
}
function normalizeEntries(entries) {
    if (Array.isArray(entries)) {
        return entries.map(({ find, replacement }) => {
            return new Entry(find, replacement);
        });
    }
    else {
        return Object.keys(entries).map((key) => {
            return new Entry(key, entries[key]);
        });
    }
}
class Entry {
    find;
    replacement;
    constructor(find, replacement) {
        this.find = find;
        this.replacement = replacement;
    }
    match(filePath) {
        if (typeof this.find === 'string') {
            return filePath.startsWith(this.find);
        }
        else {
            return this.find.test(filePath);
        }
    }
    replace(filePath) {
        return filePath.replace(this.find, this.replacement) + '.js';
    }
}

export { alias };
