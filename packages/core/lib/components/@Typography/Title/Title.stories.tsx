import type { Meta, StoryObj } from "@storybook/react";

import type { TitleProps } from './props';
import Title from "./Title";

const meta: Meta<TitleProps> = {
    component: Title,
    argTypes: {
        order: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            control: {type: 'select'}
        }
    }
}

export default meta;
type Story = StoryObj<TitleProps>;

export const Default: Story = {
    args: {
        children: 'Simple Title',
        order: 'h1',
    }
}