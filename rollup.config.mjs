import typescript from 'rollup-plugin-typescript2';
//代码压缩工具
import terser from "@rollup/plugin-terser";

import alias from '@rollup/plugin-alias';

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/index.js',
        format: 'es',
        name: 'MyLibrary'
    },
    plugins: [
        alias({
            entries: [
              { find: '@', replacement: 'src' },
            ]
        }),
        typescript(),
        terser(),
    ]
};