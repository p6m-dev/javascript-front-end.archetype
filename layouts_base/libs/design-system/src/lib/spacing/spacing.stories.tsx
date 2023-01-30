import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacing as Space } from './spacing';

const Story: ComponentMeta<typeof Space> = {
  component: Space,
  title: 'Design System/Spacing & Layout',
};
export default Story;

const Template: ComponentStory<typeof Space> = (args) => <Space {...args} />;

export const Spacing = Template.bind({});
Spacing.args = {};
