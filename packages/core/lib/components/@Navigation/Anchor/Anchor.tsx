// types
import type { PolarProps } from "../../../@Types/props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

// style
import Style from "./style/Anchor";

interface Props extends PolarProps, PolarStyledComponentsProps { }

const Anchor = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
}

export default Anchor;