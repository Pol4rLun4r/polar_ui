// types
import type { PolarProps, PolarStyledComponentsProps } from "../../../@Types/props";

// style
import Style from "./style/Flex";

interface Props extends PolarProps, PolarStyledComponentsProps { }

const Flex = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
};

export default Flex;