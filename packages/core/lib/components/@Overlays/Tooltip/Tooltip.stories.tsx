import type { Meta, StoryObj } from "@storybook/react";

// type
import type { TooltipProps } from "./props";

// Component
import Tooltip from "./Tooltip";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

// UI
import { Text } from "polar_ui"

const meta: Meta<TooltipProps> = {
    component: Tooltip,
    argTypes: {
        ...disableArgs,
        children: { table: { disable: true } },
        label: { control: { type: 'text' } },
        withArrow: { control: { type: 'boolean' } },
    },
    render: ({ ...args }) => (
        <Tooltip {...args}>
            <Text>Simple Text</Text>
        </Tooltip>
    )
}

export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
    args: {
        label: 'this is a simple text',
        withArrow: true
    }
}