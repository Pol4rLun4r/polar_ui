import type { Meta, StoryObj } from "@storybook/react";

import type { PolarProps } from "../../../@Types/props";
import Flex from "./style/Flex";

const meta: Meta<PolarProps> = {
    component: Flex
}

export default meta;
type Story = StoryObj<PolarProps>;

export const Default: Story = {
    args: {
        children: 'Simple Text',
    }
}