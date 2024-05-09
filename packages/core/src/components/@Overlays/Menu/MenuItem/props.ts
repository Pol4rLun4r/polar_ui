import { ReactNode } from "react";

// types
import type{ PolarProps } from "../../../../@Types/props";

export interface MenuItemProps extends PolarProps {
    leftSection?: ReactNode
    rightSection?: ReactNode
    index?: number;
}