// types
import { ReactNode } from "react";
import { PolarProps } from "../../../@Types/props";
import { BadgeVariant, PolarSize } from "../../../@Types/types";

export interface BadgeProps extends PolarProps {
    size?: PolarSize;
    variant?: BadgeVariant;
    gradient?: { from: string, to: string, deg: number };

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: true;
}