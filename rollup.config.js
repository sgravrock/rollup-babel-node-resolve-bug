import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        format: 'iife',
        name: 'foo',
        file: 'dist/built.js'
    },
    plugins: [
        resolve({
            preferBuiltins: false
        }),
        babel({
            "presets": [
                ["@babel/env"]
            ]
        }),
        commonjs()
    ],
};