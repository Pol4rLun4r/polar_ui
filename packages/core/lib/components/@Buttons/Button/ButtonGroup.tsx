// style
import { ButtonGroupStyle } from "./style/Button";

// type
import type { PolarProps } from "../../../@Types/props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends PolarProps, PolarStyledComponentsProps {}

function ButtonGroup(props: Props) {
    return (
        <ButtonGroupStyle {...props}>
            {props.children}
        </ButtonGroupStyle>
    );
}

export default ButtonGroup