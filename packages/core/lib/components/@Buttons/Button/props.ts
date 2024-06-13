// types
import type { PolarProps } from "../../../@Types/props";
import type { PolarSize, ButtonVariant } from "../../../@Types/types";
import type { ReactNode } from "react";

export interface ButtonProps extends PolarProps {
    size?: PolarSize | (string & NonNullable<unknown>);
    variant?: ButtonVariant;
    disabledHoverEffect?: boolean | true;
    gradient?: { from: string, to: string, deg: number };

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    fullWidth?: boolean | true;

    disabled?: boolean | true;
}