import { PolarProps } from "../../../@Types/props";

export interface TooltipProps extends PolarProps {
    label: string | number;
    withArrow?: true;
}