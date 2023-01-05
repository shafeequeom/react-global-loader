import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      resolve(),
      terser(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
      dts(),
    ],
  },
];
