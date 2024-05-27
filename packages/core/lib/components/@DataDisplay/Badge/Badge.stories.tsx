import type { Meta, StoryObj } from "@storybook/react";

// type
import type { BadgeProps } from "./props";

// Component
import Badge from "./Badge";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<BadgeProps> = {
    component: Badge,
    argTypes: {
        ...disableArgs,
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        variant: {
            options: ['default', 'filled', 'light', 'outline', 'transparent', 'white', 'custom', 'gradient', 'dot'],
            control: { type: 'select' },
            table: {
                defaultValue: { summary: 'default' }
            }
        },
        radius: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        gradient: {
            control: { type: "object" },
        },
        fullWidth: {
            control: { type: "boolean" },
        },
        leftSection: {
            control: { type: "text" },
        },
        rightSection: {
            control: { type: "text" },
        },

    }
}

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
    args: {
        children: 'Badge',
        size: 'lg',
        variant: 'filled',
        radius: 'lg',
        gradient: { deg: 10, from: 'red', to: 'orange' },
        fullWidth: false
    }
}