// types
import type { LayoutComponentsProps, PolarStyledComponentsProps } from "../../../@Types/props";

// style
import Style from "./style/Box";

interface Props extends LayoutComponentsProps, PolarStyledComponentsProps { }

const Box = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
};

export default Box;