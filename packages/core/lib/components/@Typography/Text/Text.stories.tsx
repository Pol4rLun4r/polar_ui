import type { Meta, StoryObj } from "@storybook/react";

import type { TextProps } from './props';
import Text from "./style/Text";

const meta: Meta<TextProps> = {
    component: Text,
    argTypes: {
        variant: {
            options: ['default', 'description', 'gradient', 'whiteText'],
            control: {type: 'select'}
        },
        fontSize: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {type: 'select'}
        }
    }
}

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {
    args: {
        children: 'Simple Text',
        variant: 'default',
        fontSize: 'md'
    }
}