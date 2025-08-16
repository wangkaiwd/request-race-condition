# Request Race Condition

一个展示和解决 JavaScript/React 中请求竞态问题的示例项目。

## 示例列表

1. **竞态示例** - 展示请求竞态问题的基本情况
2. **丢弃之前请求结果** - 通过标记请求ID，丢弃旧请求的结果，保留最新请求
3. **取消之前请求** - 使用AbortController取消之前的请求，减少不必要的网络开销
4. **取消之前Promise** - 自定义Promise取消机制，在更底层处理请求竞态
5. **useRequest Hook** - 使用ahooks的useRequest优雅处理竞态问题，简化代码

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

## 技术栈

- React 19
- TypeScript
- Vite
- TanStack Router
- Ant Design
- Axios
- ahooks