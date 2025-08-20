import type { Preview } from '@storybook/vue3-vite'

const preview: Preview = {
  // 配置storybook的参数
  parameters: {
    // 配置storybook的controls(控制台)
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    // 配置storybook的a11y(无障碍)
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;