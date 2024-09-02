import type { PolarProps } from "../../../@Types/props";

export interface FloatingIndicatorProps extends PolarProps {

    // defines the component that the floating will appear on top of
    target: HTMLElement | null | undefined;

    // defines who would be the relative referring to the FloatingIndicator
    parent: HTMLElement | null | undefined;

    // sets the color of the indicator
    color?: any;

    // property intended to check any changes within its component, for example its size
    Detection?: any;
}