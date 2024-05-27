// style
import BadgeStyle, { Dot } from "./style/Badge"

// type 
import type { BadgeProps } from "./props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends BadgeProps, PolarStyledComponentsProps { }

const Badge = (props: Props) => {
  return (
    <BadgeStyle {...props}>
      {props.leftSection}
      {props.variant === 'dot' &&
        <Dot />
      }
      {props.children}
      {props.rightSection}
    </BadgeStyle>
  )
}

export default Badge;