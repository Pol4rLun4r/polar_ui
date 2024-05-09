import { ReactNode } from "react";

// types
import type { PolarProps } from "../../../@Types/props";

export interface MenuProps extends PolarProps {
    activeMenu: ReactNode;
}