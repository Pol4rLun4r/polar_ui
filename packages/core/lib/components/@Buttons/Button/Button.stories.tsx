import type { Meta, StoryObj } from "@storybook/react";

// type
import type { ButtonProps } from "./props";

// Component
import Button from "./Button";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<ButtonProps> = {
    component: Button,
    argTypes: {
        ...disableArgs,
        radius: { control: { type: 'select' } },
    }
}

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        children: 'button',
        variant: 'light',
        size: 'md',
        radius: 'lg',
        disabledHoverEffect: false,
        disabled: false,
        fullWidth: false
    },
    argTypes: {
        variant: { control: { type: 'select' } },
        radius: { control: { type: 'select' } },
        disabledHoverEffect: { control: { type: 'boolean' } },
        disabled: { control: { type: 'boolean' } },
        fullWidth: { control: { type: 'boolean' } },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        }
    }
}

export const Group: Story = {
    args: {
        variant: 'light',
        radius: 'lg',
        size: 'md',
    },
    argTypes: {
        disabledHoverEffect: { table: { disable: true } },
        disabled: { table: { disable: true } },
        fullWidth: { table: { disable: true } },
        children: { table: { disable: true } },
        gradient: { table: { disable: true } },
        leftSection: { table: { disable: true } },
        rightSection: { table: { disable: true } },
        // =======================================
        variant: { control: { type: 'select' } },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        }

    },
    render: (args) => (
        <Button.Group {...args} direction="row">
            <Button variant={args.variant} size={args.size}>hello</Button>
            <Button variant={args.variant} size={args.size}>world</Button>
            <Button variant={args.variant} size={args.size}>my name is</Button>
            <Button variant={args.variant} size={args.size}>polar</Button>
        </Button.Group>
    )
}