import type { Meta, StoryObj } from "@storybook/react";

// type
import type { ActionIconProps } from "./props";

// Component
import ActionIcon from "./ActionIcon";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<ActionIconProps> = {
    component: ActionIcon,
    argTypes: {
        ...disableArgs,
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        variant: { control: { type: 'select' } },
        radius: { control: { type: 'select' } },
    }
}

export default meta;
type Story = StoryObj<ActionIconProps>;

export const Default: Story = {
    args: {
        children: '!',
        variant: 'light',
        size: 'xl',
        radius: 'md'
    }
}