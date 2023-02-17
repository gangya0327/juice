import { Plugin } from 'rollup';
interface AliasOptions {
    entries: {
        [key: string]: string;
    } | {
        find: string | RegExp;
        replacement: string;
    }[];
}
export default function alias(options: AliasOptions): Plugin;
export {};
