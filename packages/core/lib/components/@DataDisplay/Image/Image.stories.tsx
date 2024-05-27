import type { Meta, StoryObj } from "@storybook/react";

// type
import type { ImageProps } from "./props";

// Component
import Image from "./Image";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

const meta: Meta<ImageProps> = {
    component: Image,
    argTypes: {
        ...disableArgs,
        children: { table: { disable: true } },
        withBorder: {
            control: { type: 'boolean' }
        },
        objectFit: {
            options: ["fill", "contain", "cover", "none", "scale-down"],
            control: { type: 'select' }
        },
        alt: { control: { type: "text" } }
    }
}

export default meta;
type Story = StoryObj<ImageProps>;

export const Default: Story = {
    args: {
        src: 'https://i.imgur.com/6eXPzzX.jpeg',
        height: '60%',
        withBorder: true
    }
}