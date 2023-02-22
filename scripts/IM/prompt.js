/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangyuehai
 * @Date: 2023-02-17 14:02:49
 * @LastEditors: zhangyuehai
 * @LastEditTime: 2023-02-21 13:44:32
 */
import chalk from 'chalk';
import inquirer from 'inquirer';
import ini from 'ini';
import fs from 'fs-extra';
import { merge as _merge } from 'lodash-es';
import {im} from './im.js'
import { chatGPT  } from './chatGPT.js';
// 提示参数收集
let promptParams = {};

export async function prompt(options) {
   let answer = await inquirer.prompt([
        { name: "token",
         type: "input",
          message: "请输入token: 1d043594934dad52f22726fb27f0c095", 
        },
        { name: "appKey",
         type: "input",
          message: "请输入appKey: 177ae66b6518690e7a91923115bde376", 
        },
        { name: "account",
         type: "input",
          message: "请输入account: 1d043594934dad52f22726fb27f0c095", 
        },
    ])
        im(answer)
        chatGPT()

}