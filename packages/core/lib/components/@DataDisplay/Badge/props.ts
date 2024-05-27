// types
import { ReactNode } from "react";
import { PolarProps } from "../../../@Types/props";
import { BadgeVariant, PolarSize } from "../../../@Types/types";

export interface BadgePropsStory extends Pick<PolarProps, 'children'> {
    size?: PolarSize;
    variant?: BadgeVariant;
    gradient?: { from: string, to: string, deg: number };

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: boolean | true;
}

export interface BadgeProps extends BadgePropsStory, PolarProps {}