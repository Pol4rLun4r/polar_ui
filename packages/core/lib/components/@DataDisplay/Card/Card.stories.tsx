import type { Meta, StoryObj } from "@storybook/react";

// type
import type { CardProps } from "./props";

// Component
import Card from "./Card";

// storyBook Tool
import disableArgs from "../../../../.storybook/Tools/DisableArgs";

// UI
import { Text, Image, Group, Badge } from "polar_ui"

const meta: Meta<CardProps> = {
    component: Card,
    argTypes: {
        ...disableArgs,
        withBorder: { control: { type: 'boolean' } },
        children: { table: { disable: true } },
        radius: {control: {type: 'select'}}
    },
    render: ({ ...args }) => (
        <Card {...args} maxWidth={"21.563rem"}>
            <Card.Section>
                <Image src="https://www.renderhub.com/clickdamn/ice-bear-polar-bear/ice-bear-polar-bear-01.jpg" />
            </Card.Section>
            <Group justify="space-between">
                <Text textTransform="capitalize" fontWeight="bold">polar bear</Text>
                <Badge variant="filled" radius="lg">live</Badge>
            </Group>
            <Text variant="description" fontSize="sm">
            Polar bears are stocky, with a long neck, relatively small head, short, rounded ears, and a short tail. The male, which is much larger than the female, weighs 410 to 720 kg.
            </Text>
            {/*  button space */}
        </Card>
    )
}

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
    args: {
        withBorder: false,
        radius: 'lg'
    }
}