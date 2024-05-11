// types
import type{ PolarProps } from "../../../@Types/props";
import type { PolarSize } from "../../../@Types/types";

export interface ColorSwatchProps extends PolarProps {
    size?: PolarSize | (string & NonNullable<unknown>);
    swatch?: React.CSSProperties['color'];
    circle?: true;
}