import MenuStyle from "./style/MenuLabel"

// type
import type { PolarProps } from "../../../../@Types/props";
import type { PolarStyledComponentsProps } from "../../../../@Types/props";

interface Props extends PolarProps, PolarStyledComponentsProps {}

function MenuLabel(props: Props) {
    return (
        <MenuStyle {...props}>{props.children}</MenuStyle>
    );
}

export default MenuLabel;