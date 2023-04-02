import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 本网站基于ChatGPT和Github开源项目制作 
- 仅供独众传媒内部使用 切勿外传 避免网站被封！！！
- 本网站由何高阳开发与维护，未经允许不得用于商业用途
- 在使用过程中遇到任何问题可以联系本人微信 [喔嚯](https://raw.githubusercontent.com/hgy667/hgy01/main/assets/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230402211926.jpg?token=GHSAT0AAAAAACA3TROS6WST5NRIWI5VOL4OZBJRERQ)
==================================
- [[Shift]] + [[Enter]] 文字换行。开头输入 [[/]] 使用提问辅助。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
