import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { dts } from 'rollup-plugin-dts'

const outputConfigs = [
    {
        file: 'dist/index.cjs',
        format: 'cjs'
    },
    {
        file: 'dist/index.esm.js',
        format: 'es',
        exports: 'named'
    },
    {
        file: 'dist/index.js',
        format: 'umd',
        name: 'jstm'
    }
]

export default [
    ...outputConfigs.map((config) => ({
        input: 'src/index.ts',
        output: {
            ...config
        },
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            terser()
        ]
    })),
    {
        input: './src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
]
