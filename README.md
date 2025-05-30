# 空调模拟器

一个基于 React 和 Tailwind CSS 构建的交互式空调模拟器web应用。西黄村特供版本。

![西黄村](./public/xihuangcun.png)

## 功能特性

-  **电源控制** - 开启/关闭空调
-  **温度调节** - 16°C - 30°C 温度范围控制
-  **多种模式** - 制冷、制热、除湿、送风四种工作模式
-  **风速控制** - 五档风速调节
-  **摆风功能** - 左右摆风开关
-  **响应式设计** - 适配各种屏幕尺寸
-  **动画效果** - 丰富的视觉反馈和动画

## 技术栈

- React 18
- Tailwind CSS 3
- JavaScript (ES6+)

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 http://localhost:3000

## 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
  components/
    AirConditioner.jsx   # 空调主机组件
    RemoteControl.jsx    # 遥控器组件
  App.jsx                # 主应用组件
  main.jsx              # 应用入口
  index.css             # 全局样式
```

## 使用说明

1. 点击遥控器上的 ON/OFF 按钮来开启或关闭空调
2. 使用 +/- 按钮调节温度
3. 点击不同的模式按钮切换工作模式
4. 点击风速按钮调节风力大小
5. 点击摆风按钮开启/关闭摆风功能

空调主机会实时显示当前的工作状态，并伴有相应的动画效果。
