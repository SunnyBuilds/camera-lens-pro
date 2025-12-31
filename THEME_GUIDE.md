# 主题配置指南

## 概述

现在整个网站已经完全配置驱动，你只需要修改 `lib/site.config.ts` 文件，所有更改会自动应用到整个网站。

## 已实现的功能

### 1. 品牌配置
- ✅ 网站名称
- ✅ 网站标语
- ✅ 网站描述
- ✅ 动态 Logo（支持 Lucide 图标、SVG、图片）

### 2. 配色方案
- ✅ 完全自定义的颜色配置
- ✅ 支持亮色和暗色模式
- ✅ 使用 OKLCH 色彩空间
- ✅ 动态生成 CSS 变量

### 3. 字体配置
- ✅ 自定义主字体（sans）
- ✅ 自定义等宽字体（mono）
- ✅ 自动应用到整个网站

### 4. SEO 配置
- ✅ 标题和描述
- ✅ 关键词
- ✅ OpenGraph 和 Twitter 卡片
- ✅ 作者和社交媒体信息

### 5. 导航配置
- ✅ 动态导航菜单
- ✅ 桌面端和移动端自动同步

### 6. 页脚配置
- ✅ About 区域
- ✅ 版权信息
- ✅ 联盟声明

## 如何使用

### 修改品牌信息

```typescript
// lib/site.config.ts
brand: {
  name: "你的网站名称",
  tagline: "你的标语",
  description: "你的网站描述",
}
```

### 更换 Logo

#### 使用 Lucide 图标
```typescript
logo: {
  type: "lucide",
  icon: "Tent", // 可用图标：https://lucide.dev/icons/
}
```

#### 使用自定义 SVG
```typescript
logo: {
  type: "svg",
  svgPath: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
}
```

#### 使用图片
```typescript
logo: {
  type: "image",
  imagePath: "/logo.png",
}
```

### 修改配色方案

#### 方式 1：使用预设主题
```typescript
theme: {
  preset: 1, // 1=科技蓝, 2=紫罗兰, 3=橙红, 4=中性灰
}
```

#### 方式 2：自定义颜色
```typescript
theme: {
  preset: "custom",
  colors: {
    light: {
      primary: "oklch(0.55 0.15 250)",    // 主色
      secondary: "oklch(0.45 0.08 260)",  // 次色
      accent: "oklch(0.65 0.20 180)",     // 强调色
      background: "oklch(0.98 0.005 250)", // 背景色
      foreground: "oklch(0.25 0.03 250)",  // 文字色
      // ... 更多颜色
    },
    dark: {
      // 暗色模式配置
    }
  }
}
```

### 修改字体
```typescript
fonts: {
  sans: "Inter",        // 主字体
  mono: "Roboto Mono",  // 等宽字体
}
```

可选字体：Inter, Poppins, Roboto, Montserrat, "Noto Sans SC"

### 修改导航菜单
```typescript
navigation: {
  main: [
    { label: "首页", href: "/" },
    { label: "产品", href: "/products" },
    { label: "关于", href: "/about" },
  ]
}
```

## 颜色说明

使用 OKLCH 色彩空间：`oklch(亮度 色度 色相)`

- **亮度 (0-1)**: 0=黑色, 1=白色
- **色度 (0-0.4)**: 颜色饱和度
- **色相 (0-360)**: 颜色角度
  - 0-30: 红色
  - 30-90: 橙黄色
  - 90-150: 黄绿色
  - 150-210: 绿青色
  - 210-270: 蓝色
  - 270-330: 紫色
  - 330-360: 粉红色

## 预设主题

### 方案 1：现代科技蓝
适合：科技产品、商务服务、SaaS 平台
```typescript
theme: { preset: 1 }
```

### 方案 2：优雅紫罗兰
适合：创意设计、艺术作品、时尚品牌
```typescript
theme: { preset: 2 }
```

### 方案 3：活力橙红
适合：电商平台、美食博客、生活方式
```typescript
theme: { preset: 3 }
```

### 方案 4：简约中性灰
适合：专业服务、极简设计、企业官网
```typescript
theme: { preset: 4 }
```

## 技术实现

### 组件重构
- `SiteHeader`: 动态 Logo + 导航菜单
- `SiteFooter`: 动态页脚内容
- `layout.tsx`: 动态 SEO metadata

### 主题系统
- `theme-generator.ts`: 根据配置生成 CSS 变量
- `ConfigThemeProvider`: 注入动态样式
- 支持亮色/暗色模式自动切换

## 注意事项

1. 修改配置后需要重启开发服务器
2. 颜色使用 OKLCH 格式以获得更好的色彩一致性
3. Logo 图标名称必须是有效的 Lucide 图标名称
4. 字体名称必须是 Google Fonts 支持的字体

## 下一步

你现在可以：
1. 修改 `lib/site.config.ts` 中的任何配置
2. 运行 `npm run dev` 查看效果
3. 所有更改会自动应用到整个网站
