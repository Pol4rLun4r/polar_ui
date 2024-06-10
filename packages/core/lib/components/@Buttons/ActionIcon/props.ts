// types 
import type { PolarProps } from "../../../@Types/props";
import type { PolarSize } from "../../../@Types/types";
import type { ActionIconVariant } from "../../../@Types/types";

export interface ActionIconProps extends PolarProps {
    size?: PolarSize | number | (string & NonNullable<unknown>);

    variant?: ActionIconVariant;
}