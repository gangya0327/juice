import { Plugin } from 'rollup';
interface AliasOptions {
    entries: {
        [key: string]: string;
    } | {
        find: string;
        replacement: string;
    }[];
}
export declare function alias(options: AliasOptions): Plugin;
export {};
