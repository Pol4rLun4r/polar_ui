// type
import type { PolarProps } from "../../../@Types/props";

export interface ImageProps extends PolarProps {
    objectFit?: React.CSSProperties['objectFit'];
    withBorder?: boolean | true;
    alt?: string;
    src: string;
}