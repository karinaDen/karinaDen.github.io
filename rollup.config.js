import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/ts/HW3.ts',
    output: { file: 'bundle.js' },
    plugins: [
        resolve({ browser: true }),
        terser(),
        typescript(),
    ],
};