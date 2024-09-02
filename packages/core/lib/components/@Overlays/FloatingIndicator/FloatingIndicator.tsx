import { useRef } from "react";

// style
import { Indicator } from "./style/FloatingIndicator";

// hook
import useFloatingIndicator from "./useFloatingIndicator";

// types
import type { FloatingIndicatorProps } from "./props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends FloatingIndicatorProps, Omit<PolarStyledComponentsProps, 'target'> { }

const FloatingIndicator = ({ parent, target, color, Detection, ...props }: Props) => {
    const floatRef = useRef<HTMLDivElement>(null)

    useFloatingIndicator({ parent, target, ref: floatRef, Detection });

    return (
        <Indicator backgroundColor={color} {...props} ref={floatRef} />
    )
}

export default FloatingIndicator;