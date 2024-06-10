// style
import ButtonStyle from "./style/Button"

// type
import type { ButtonProps } from "./props"
import type { PolarHTMLButtonElement } from "../../../@Types/props"

//components
import ButtonGroup from "./ButtonGroup"

interface Props extends ButtonProps, PolarHTMLButtonElement {}

const Button = (props: Props) => {
    return (
        <ButtonStyle {...props}>
            {props.leftSection}
            {props.children}
            {props.rightSection}
        </ButtonStyle>
    )
}

Button.Group = ButtonGroup;

export default Button;