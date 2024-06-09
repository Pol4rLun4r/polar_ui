// types
import type { ReactNode } from "react";
import type { PolarProps } from "../../../../@Types/props";

export interface MenuItemProps extends PolarProps {
    leftSection?: ReactNode;
    rightSection?: ReactNode;
}