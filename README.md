# Vue3 + Vite + TS + VueUse + UnoCSS + ESLint Starter 🚀

[![Vue](https://img.shields.io/badge/Vue-3.5-42b883?logo=vuedotjs&logoColor=fff)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![UnoCSS](https://img.shields.io/badge/UnoCSS-66.6-333333?logo=unocss&logoColor=fff)](https://unocss.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39-4B32C3?logo=eslint&logoColor=fff)](https://eslint.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.18-F69220?logo=pnpm&logoColor=fff)](https://pnpm.io/)

一个面向真实业务的 Vue 3 最新技术栈模板，开箱即用、轻量且可扩展。

## 特性 ✨
- 最新核心：Vue 3 + Vite 7 + TypeScript 5
- 实用工具：内置 VueUse（以组合式函数管理共享状态与副作用）
- 原子样式：UnoCSS（含 `@apply` 与括号分组）
- 路由与请求：Vue Router 5 + Axios
- 规范化：Antfu ESLint 配置，统一代码风格
- 环境区分：内置多环境 `.env` 配置

## 技术栈 🧰
- 框架：Vue 3
- 构建：Vite 7
- 语言：TypeScript 5
- 状态/工具：VueUse
- 样式：UnoCSS + Reset
- 路由：Vue Router 5
- 请求：Axios
- 规范：ESLint (antfu)

## 项目结构 🗂️
- `src/` 业务代码
- `src/api/` 接口层
- `src/utils/` 通用工具
- `src/stores/` 状态示例
- `src/router/` 路由
- `src/views/` 页面

## 快速开始 ⚡
```sh
pnpm install
pnpm dev
```

## 脚本 📜
```sh
pnpm dev       # 本地开发
pnpm build     # 构建生产
pnpm preview   # 预览构建
pnpm type-check# 类型检查
```

## 环境变量 🔧
- `VITE_APP_ENV` 运行环境
- `VITE_APP_BASE_API` 接口基础地址

## UnoCSS 🎨
已开启：
- `@apply` 指令
- 括号分组（如 `hover:(bg-red-500 text-white)`）

## 为什么用 VueUse 做状态管理 🧩
VueUse 并非传统意义的全局状态库，但它提供大量可复用的组合式函数，可用来承载“可共享的响应式状态 + 副作用管理”。在中小项目里，这种方式更轻量、心智负担更低、拆分更灵活。
适用场景：
- 局部或模块级共享状态（用自定义 composable 封装）
- 跨组件复用的副作用逻辑（如 `useFetch`、`useStorage`）
- 需要快速落地、避免引入重型状态库的项目

如果项目规模扩大，再按需引入 Pinia 等专门的状态管理库即可。

## 说明 📝
这是一个偏“工程化”取向的起步模板，适合中小型项目或作为公司级脚手架的基础。

## License 📄
MIT
