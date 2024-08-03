import type { PolarProps } from "../../../@Types/props";

export interface FloatingIndicatorProps extends PolarProps {
    target: HTMLElement | null | undefined;
    parent: HTMLElement | null | undefined;

    color?: any;
}