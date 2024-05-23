// types
import type { PolarProps, PolarStyledComponentsProps } from "../../../@Types/props";

// style
import Style from "./style/Stack";

interface Props extends PolarProps, PolarStyledComponentsProps { }

const Stack = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
};

export default Stack;