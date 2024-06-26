// types
import type { ReactNode } from "react";
import type { PolarProps } from "../../../@Types/props";
import type { PolarSize } from "../../../@Types/types";

export interface CheckboxProps extends PolarProps {
    label: string;

    size?: PolarSize;
    variant?: 'default' | 'outline'; 

    disabled?: boolean | true;
    checked?: boolean | true;
    error?: boolean | true;

    errorMessage?: ReactNode;
    description?: string;
    withAsterisk?: boolean | true;

    // prop for React-Hook-Form
    register?: any;
}