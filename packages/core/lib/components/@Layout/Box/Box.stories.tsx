import type { Meta, StoryObj } from "@storybook/react";

import type { LayoutComponentsProps } from "../../../@Types/props";
import Box from "./style/Box";

const meta: Meta<LayoutComponentsProps> = {
    component: Box,
    argTypes: {
        radius: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {type: 'select'}
        }
    }
}

export default meta;
type Story = StoryObj<LayoutComponentsProps>;

export const Default: Story = {
    args: {
        children: 'Simple Text',
        radius: 'md'
    }
}