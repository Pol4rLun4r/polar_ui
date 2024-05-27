import type { Meta, StoryObj } from "@storybook/react";

// type
import type { ColorSwatchProps } from "./props";

// Component
import ColorSwatch from "./ColorSwatch";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<ColorSwatchProps> = {
    component: ColorSwatch,
    argTypes: {
        ...disableArgs,
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        swatch: {
            control: {type: 'color'}
        },
        circle: {
            control: {type: 'boolean'}
        }

    }
}

export default meta;
type Story = StoryObj<ColorSwatchProps>;

export const Default: Story = {
    args: {
        children: '',
        size: 'lg',
        swatch: '',
        circle: true
    }
}