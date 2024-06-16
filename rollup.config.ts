import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const outputConfigs = [
    {
        file: 'dist/index.common.js',
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

export default outputConfigs.map((config) => ({
    input: 'src/index.ts',
    output: {
        ...config
    },
    plugins: [typescript(), resolve(), commonjs(), terser()]
}))
