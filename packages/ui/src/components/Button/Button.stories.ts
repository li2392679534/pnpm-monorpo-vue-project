// CSF
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// 默认导出元数据控制 Storybook 如何列出你的故事并提供插件使用的信息
const meta = {
  // 唯一的，可用/进行嵌套结构，CSF3.0后是可选的，可根据文件结构自行推断
  title: 'Test/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export const HowlongTest: Story = {
  args: {
    backgroundColor: '#172654',
    'size':'large',
    primary: true,
    label: "HowLong Test",
    onClick: () => {
      alert("HowlongTest");
    }
  }
};
