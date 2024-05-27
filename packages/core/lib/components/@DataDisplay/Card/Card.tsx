// style
import CardStyle from "./style/Card"

// type
import type { CardProps } from "./props" 
import type { PolarStyledComponentsProps } from "../../../@Types/props"

// component
import CardSection from "./CardSection"

interface Props extends CardProps, PolarStyledComponentsProps {}

function Card(props: Props) {
    return (
        <CardStyle {...props}>
            {props.children}
        </CardStyle>
    )
}

Card.Section = CardSection;

export default Card