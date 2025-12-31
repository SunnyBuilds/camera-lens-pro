// lib/theme-presets.ts
// 主题预设配置 - 包含多种预设主题方案
// AI 可以根据用户需求选择合适的主题预设

import type { SiteConfig } from './site.config'

// 主题预设类型
export type ThemePreset = Pick<SiteConfig, 'theme' | 'fonts'>

// ==================== 方案 1：现代科技蓝 ====================
// 适合：科技产品、商务服务、SaaS 平台
export const techBlueTheme: ThemePreset = {
  theme: {
    preset: "custom" as const,
    colors: {
      light: {
        primary: "oklch(0.55 0.15 250)",      // 鲜明的蓝色
        secondary: "oklch(0.45 0.08 260)",    // 深蓝灰
        accent: "oklch(0.65 0.20 180)",       // 青绿色（CTA按钮）
        background: "oklch(0.98 0.005 250)",  // 浅蓝白
        foreground: "oklch(0.25 0.03 250)",   // 深蓝黑
        card: "oklch(1 0 0)",
        border: "oklch(0.9 0.01 250)",
        input: "oklch(0.9 0.01 250)",
        muted: "oklch(0.95 0.01 250)",
        mutedForeground: "oklch(0.5 0.02 250)",
      },
      dark: {
        primary: "oklch(0.60 0.18 250)",      // 明亮蓝
        background: "oklch(0.18 0.02 250)",   // 深蓝黑
        foreground: "oklch(0.95 0.01 250)",
        card: "oklch(0.22 0.02 250)",         // 深蓝灰
        border: "oklch(0.3 0.02 250)",
        input: "oklch(0.3 0.02 250)",
        muted: "oklch(0.3 0.02 250)",
        mutedForeground: "oklch(0.65 0.02 250)",
      }
    }
  },
  fonts: {
    sans: "Inter",
    mono: "Roboto Mono",
  }
}

// ==================== 方案 2：优雅紫罗兰 ====================
// 适合：创意设计、艺术作品、时尚品牌
export const purpleTheme: ThemePreset = {
  theme: {
    preset: "custom" as const,
    colors: {
      light: {
        primary: "oklch(0.50 0.18 290)",      // 优雅紫色
        secondary: "oklch(0.45 0.10 280)",    // 深紫灰
        accent: "oklch(0.60 0.22 320)",       // 粉紫色（CTA按钮）
        background: "oklch(0.98 0.005 290)",  // 浅紫白
        foreground: "oklch(0.25 0.03 280)",   // 深紫黑
        card: "oklch(1 0 0)",
        border: "oklch(0.9 0.01 280)",
        input: "oklch(0.9 0.01 280)",
        muted: "oklch(0.95 0.01 280)",
        mutedForeground: "oklch(0.5 0.02 280)",
      },
      dark: {
        primary: "oklch(0.60 0.20 290)",      // 明亮紫
        background: "oklch(0.18 0.02 280)",   // 深紫黑
        foreground: "oklch(0.95 0.01 280)",
        card: "oklch(0.22 0.02 280)",         // 深紫灰
        border: "oklch(0.3 0.02 280)",
        input: "oklch(0.3 0.02 280)",
        muted: "oklch(0.3 0.02 280)",
        mutedForeground: "oklch(0.65 0.02 280)",
      }
    }
  },
  fonts: {
    sans: "Poppins",
    mono: "Roboto Mono",
  }
}

// ==================== 方案 3：活力橙红 ====================
// 适合：电商平台、美食博客、生活方式
export const orangeTheme: ThemePreset = {
  theme: {
    preset: "custom" as const,
    colors: {
      light: {
        primary: "oklch(0.55 0.20 30)",       // 活力橙色
        secondary: "oklch(0.45 0.08 20)",     // 深橙灰
        accent: "oklch(0.60 0.25 15)",        // 珊瑚红（CTA按钮）
        background: "oklch(0.98 0.005 30)",   // 浅橙白
        foreground: "oklch(0.25 0.03 20)",    // 深棕黑
        card: "oklch(1 0 0)",
        border: "oklch(0.9 0.01 30)",
        input: "oklch(0.9 0.01 30)",
        muted: "oklch(0.95 0.01 30)",
        mutedForeground: "oklch(0.5 0.02 30)",
      },
      dark: {
        primary: "oklch(0.65 0.22 30)",       // 明亮橙
        background: "oklch(0.18 0.02 20)",    // 深棕黑
        foreground: "oklch(0.95 0.01 20)",
        card: "oklch(0.22 0.02 20)",          // 深橙灰
        border: "oklch(0.3 0.02 20)",
        input: "oklch(0.3 0.02 20)",
        muted: "oklch(0.3 0.02 20)",
        mutedForeground: "oklch(0.65 0.02 20)",
      }
    }
  },
  fonts: {
    sans: "Poppins",
    mono: "Roboto Mono",
  }
}

// ==================== 方案 4：简约中性灰 ====================
// 适合：专业服务、极简设计、企业官网
export const grayTheme: ThemePreset = {
  theme: {
    preset: "custom" as const,
    colors: {
      light: {
        primary: "oklch(0.35 0.02 240)",      // 深炭灰
        secondary: "oklch(0.50 0.01 240)",    // 中灰
        accent: "oklch(0.40 0.03 240)",       // 深灰蓝（CTA按钮）
        background: "oklch(0.99 0 0)",        // 纯白
        foreground: "oklch(0.20 0.01 240)",   // 深黑
        card: "oklch(1 0 0)",
        border: "oklch(0.9 0.01 240)",
        input: "oklch(0.9 0.01 240)",
        muted: "oklch(0.95 0.01 240)",
        mutedForeground: "oklch(0.5 0.01 240)",
      },
      dark: {
        primary: "oklch(0.70 0.02 240)",      // 浅灰
        background: "oklch(0.15 0.01 240)",   // 深黑
        foreground: "oklch(0.95 0.01 240)",
        card: "oklch(0.20 0.01 240)",         // 深灰
        border: "oklch(0.3 0.01 240)",
        input: "oklch(0.3 0.01 240)",
        muted: "oklch(0.3 0.01 240)",
        mutedForeground: "oklch(0.65 0.01 240)",
      }
    }
  },
  fonts: {
    sans: "Montserrat",
    mono: "Roboto Mono",
  }
}

// 导出所有主题预设
export const themePresets = {
  techBlue: techBlueTheme,
  purple: purpleTheme,
  orange: orangeTheme,
  gray: grayTheme,
}

