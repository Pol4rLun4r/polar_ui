import type { Meta, StoryObj } from "@storybook/react";

// type
import type { MenuProps } from "./props";

// Component
import Menu from "./Menu";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<MenuProps> = {
    component: Menu,
    argTypes: {
        ...disableArgs,
        children: { table: { disable: true } },
    },
    render: ({ ...args }) => (
        <Menu {...args} menuLauncher="Click me">
            <Menu.Label textTransform="capitalize">fruit menu</Menu.Label>
            <Menu.Item leftSection="🍌">Banana</Menu.Item>
            <Menu.Item leftSection="🍎">Apple</Menu.Item>
            <Menu.Item leftSection="🍊">Orange</Menu.Item>
        </Menu>
    )
};

export default meta;
type Story = StoryObj<MenuProps>;

export const Default: Story = {
    args: {
    }
}