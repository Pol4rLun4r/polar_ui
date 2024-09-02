import type { Meta, StoryObj } from "@storybook/react";

// type
import type { SegmentProps } from "./props";

// Component
import { SegmentedControl } from "polar_ui";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<SegmentProps> = {
    component: SegmentedControl,
    argTypes: {
        ...disableArgs,
        children: { table: { disable: true } },
        name: { table: { disable: true } },
        onChange: { table: { disable: true } },
        defaultValue: { table: { disable: true } },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        radius: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        fullWidth: { control: {type: 'boolean'}},
        withBorder: { control: {type: 'boolean'}},
        orientation: { control: {type: 'inline-radio'}},
        disabled: { control: {type: 'boolean'}},
    }
}

export default meta;
type Story = StoryObj<SegmentProps>;

export const Default: Story = {
    args: {
        data: [{ label: 'React', value: 'react'}, 'cookie', 'label'],
        radius: "xl",
        size: "xl",
        fullWidth: false,
        withBorder: false,
        orientation: "horizontal",
        disabled: false,
    }
}