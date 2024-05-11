// style
import { CardSectionStyle } from "./style/Card"

// type
import type { CardProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props"

interface Props extends CardProps, PolarStyledComponentsProps {}

function CardSection(props: Props) {

  return (
    <CardSectionStyle {...props}>
      {props.children}
    </CardSectionStyle>
  )
}

export default CardSection