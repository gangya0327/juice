function alias() {
    return {
        name: 'alias',
        resolveId(source) {
            console.log('alias - source =>', source);
            return source;
        }
    };
}

export { alias as default };
