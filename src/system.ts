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

export const defaultMessage = `chatgpt 3.5  大众体验版
- 玩转GPT-3.5免费体验一天！ 
- 我们公司排到了OPENAI的api，现在有接口大家可以免魔法，不用注册帐号就可以进群试用gpt3.5AI 大模型了，为了回馈大家，现在免费对大家开放社群，大家可以进来试用。
- 为了避免造成拥堵，免费体验只限一天，联系客服可拿到VIP权限：[客服微信](https://www.yuque.com/u32987515/sh30ux/tqhrznho3lx61nho?singleDoc)
- 也可自助续费：[淘宝自助入口](https://m.tb.cn/h.Uu1iPB2?tk=fgLVdO6Mupe)
- VIP客户无需魔法，无需帐号可顺畅享受Chatgpt大模型带来的效率和体验！
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
