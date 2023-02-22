/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangyuehai
 * @Date: 2023-02-21 11:40:25
 * @LastEditors: zhangyuehai
 * @LastEditTime: 2023-02-21 13:32:16
 */
// 模块导入
// 模块导入
import path from 'path';
import { merge as _merge, padEnd as _padEnd } from 'lodash-es';
// import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { fileURLToPath, pathToFileURL } from 'url';

import { cliDir } from '../system.js';

// 提示参数收集
let promptParams = {
    // 执行命令
    executeCommand: ''
};

/**
 * 选择要执行的命令
 */
async function executeCommand() {
    let choices = [
        {
            name: `${_padEnd('IM', 5)} ${chalk.cyanBright('云信集成IM')}`,
            value: 'IM'
        },
    ];

    let _executeCommand = await inquirer.prompt([
        {
            type: 'list',
            name: 'executeCommand',
            message: '请选择一个命令',
            default: promptParams.executeCommand,
            choices: choices
        }
    ]);
    _merge(promptParams, _executeCommand);
    // 命令执行路径
    let commandPath = pathToFileURL(path.resolve(cliDir, 'scripts', promptParams.executeCommand, 'prompt.js'));
    let { prompt } = await import(commandPath.href);
    await prompt();
}

export default executeCommand;