import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
const rollupTypescript = require('@rollup/plugin-typescript');

export default {
  input: "src/index.tsx",
  output: {
    // dir: "./dist",
    file: "index.js",
    format: "esm",
    exports: "named",
  },
  plugins: [
    rollupTypescript({ jsx: "react", allowSyntheticDefaultImports: true }),
    commonjs(),
    resolve(),
    replace({
      values: {
        "process.env.NODE_ENV": '"production"',
      },
    }),
  ],
};
