/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangyuehai
 * @Date: 2023-02-21 11:15:59
 * @LastEditors: zhangyuehai
 * @LastEditTime: 2023-02-21 14:34:58
 */
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json" 
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
    input:'./index.js',//入口文件
    output:{
      file:'./dist/bundle.js',//打包后的存放文件
      format:'cjs',//输出格式 amd es6 iife umd cjs
      name:'bundleName'//如果iife,umd需要指定一个全局变量
    },
    plugins:[
     nodeResolve(),
     commonjs(),
     json()
    ]
  }
  