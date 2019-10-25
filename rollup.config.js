import resolve from "rollup-plugin-node-resolve";
import typescript from 'rollup-plugin-typescript';
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".ts"];

const name = "RollupTypeScriptBabel";

export default {
  input: "./src/index.ts",

  plugins: [
    resolve({ extensions }),
    typescript(),
    commonjs({ extensions }),
    terser()
  ],

  output: [
    {
      file: "lib/index.js",
      format: "es",
      sourcemap: true
    },
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    }
  ],
};
