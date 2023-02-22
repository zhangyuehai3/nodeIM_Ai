/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangyuehai
 * @Date: 2023-02-17 14:02:49
 * @LastEditors: zhangyuehai
 * @LastEditTime: 2023-02-21 14:44:22
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const SDK = require('@yxim/nim-web-sdk/dist/SDK/NIM_Web_SDK_nodejs')
const log4js = require('log4js');


export  function im(config){
    log4js.configure({
        replaceConsole: true,
        appenders: { nimlog: { type: 'file', filename: 'nim-debug.log' } },
        categories: { default: { appenders: ['nimlog'], level: 'ALL' } }
    });
    const logger = log4js.getLogger('nimlog');
    const nim = SDK.NIM.getInstance({
        debug: true || {
            api: 'info',
            style: 'font-size:14px;color:blue;background-color:rgba(0,0,0,0.1)'
        },
        isABTestEnable:false,
        logFunc: logger,
        appKey: config.appKey ,
        account: config.account,
        token: config.token,
        onconnect: onConnect,
        ondisconnect: function () {
            console.log('连接成功');
        },
        onwillreconnect: onWillReconnect,
        ondisconnect: onDisconnect,
        onerror: onError
    })
    
    function onConnect() {
        console.log('连接成功');
    }
    function onWillReconnect(obj) {
        // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        console.log('即将重连');
        console.log(obj.retryCount);
        console.log(obj.duration);
    }
    function onDisconnect(error) {
        // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
        console.log('丢失连接');
        console.log(error);
        if (error) {
            switch (error.code) {
                // 账号或者密码错误, 请跳转到登录页面并提示错误
                case 302:
                    break;
                // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
                case 417:
                    break;
                // 被踢, 请提示错误后跳转到登录页面
                case 'kicked':
                    break;
                default:
                    break;
            }
        }
    }
    function onError(error) {
        console.log(error, '错误');
    }
    
    // var msg = nim.sendText({
    //     scene: 'p2p',
    //     to: 'c4f286472d7a92054ffa01d0147bf2d6',
    //     text: 'hello',
    //     done: function sendMsgDone (error, msg) {
    //       // 此处为回调消息事件，仅仅通知开发者，消息是否发送成功
    //       console.log(error, msg , '发送消息回调');
    //     }
    //   });
}




