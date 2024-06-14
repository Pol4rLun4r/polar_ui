// types
import type { PolarSize, InputVariant } from "../../../@Types/types";
import type { PolarProps } from "../../../@Types/props";
import type { ReactNode } from "react";

export interface InputsProps extends PolarProps {
    size?: PolarSize;

    label?: string;
    description?: string;
    error?: boolean;
    errorMessage?: ReactNode;
    withAsterisk?: boolean | true;

    leftSection?: ReactNode;
    rightSection?: ReactNode;

    variant?: InputVariant;
    disabled?: boolean | true;

    // prop for React-Hook-Form
    register?: any;
}