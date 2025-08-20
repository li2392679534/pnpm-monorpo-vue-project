import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  // 配置storybook的stories路径(mdx,stories)
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  // 配置storybook的addons(插件)
  "addons": [
    // 将storybook部署到Chromatic
    "@chromatic-com/storybook",
    // 自动生成文档
    "@storybook/addon-docs", 
    // 初始化引导
    "@storybook/addon-onboarding",
    // 用于测试无障碍功能
    "@storybook/addon-a11y",
    // 用于单元测试
    "@storybook/addon-vitest"
  ],
  // 配置storybook的框架(vue3)
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  }
};
export default config;