import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography as Typo } from './typography';

const Story: ComponentMeta<typeof Typo> = {
  component: Typo,
  title: 'Design System/Text Styles',
};
export default Story;

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />;

export const Typography = Template.bind({});
Typography.args = {};
