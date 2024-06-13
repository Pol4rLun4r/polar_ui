// style 
import Style from "./style/ActionIcon";

// types 
import type { ActionIconProps } from "./props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends ActionIconProps, PolarStyledComponentsProps { }

const ActionIcon = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
}

export default ActionIcon;