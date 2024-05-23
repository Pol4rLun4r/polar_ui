import type { Meta, StoryObj } from "@storybook/react";

import type { PolarProps } from "../../../@Types/props";
import Stack from "./style/Stack";

const meta: Meta<PolarProps> = {
    component: Stack
}

export default meta;
type Story = StoryObj<PolarProps>;

export const Default: Story = {
    args: {
        children: 'Simple Text',
    }
}