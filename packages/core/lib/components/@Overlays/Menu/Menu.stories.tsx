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
            <Menu.label textTransform="capitalize">fruit menu</Menu.label>
            <Menu.item leftSection="🍌">Banana</Menu.item>
            <Menu.item leftSection="🍎">Apple</Menu.item>
            <Menu.item leftSection="🍊">Laranja</Menu.item>
        </Menu>
    )
};

export default meta;
type Story = StoryObj<MenuProps>;

export const Default: Story = {
    args: {
    }
}