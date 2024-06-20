//types
import type { ReactNode } from "react";
import type { PolarProps } from "../../../@Types/props";
import type { PlacementType } from "../../../@Types/types";

export interface MenuProps extends PolarProps {
    menuLauncher: ReactNode;

    variant?: 'default' | 'custom'

    placement?: PlacementType;
    triggerOffset?: number;
}