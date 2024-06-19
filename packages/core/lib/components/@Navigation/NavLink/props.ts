// types
import type { ReactNode } from "react";
import type { PolarProps } from "../../../@Types/props";
import type { NavLinkVariant } from "../../../@Types/types";

export interface NavLinkProps extends PolarProps {
    label: string | undefined;
    variant?: NavLinkVariant;
    disabled?: true; 

    opened?: boolean;

    active?: boolean;
    nested?: boolean;

    to?: string; 
}

export interface NavLinkGroupProps extends PolarProps {
    label?: string | undefined;
    disabled?: true;

    leftSection?: ReactNode;
}