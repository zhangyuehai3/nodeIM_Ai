/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangyuehai
 * @Date: 2023-02-21 14:53:20
 * @LastEditors: zhangyuehai
 * @LastEditTime: 2023-02-21 18:13:16
 */
import { ChatGPTAPI } from 'chatgpt'


export async function chatGPT(){
    const api = new ChatGPTAPI({
        apiKey: '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' 
      }) 
      const res = await api.sendMessage('Hello World!')
      console.log(res.text)
}