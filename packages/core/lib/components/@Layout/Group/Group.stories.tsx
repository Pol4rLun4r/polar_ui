import type { Meta, StoryObj } from "@storybook/react";

import type { LayoutComponentsProps } from "../../../@Types/props";
import Group from "./style/Group";

const meta: Meta<LayoutComponentsProps> = {
    component: Group,
}

export default meta;
type Story = StoryObj<LayoutComponentsProps>;

export const Default: Story = {
    args: {
        children: 'Simple Text',
    }
}