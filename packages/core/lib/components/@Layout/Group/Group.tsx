// types
import type { LayoutComponentsProps, PolarStyledComponentsProps } from "../../../@Types/props";

// style
import Style from "./style/Group";

interface Props extends LayoutComponentsProps, PolarStyledComponentsProps { }

const Group = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
};

export default Group;