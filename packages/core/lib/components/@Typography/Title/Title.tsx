// style
import Style from "./style/Title"

// types
import type { TitleProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props"

interface Props extends TitleProps, PolarStyledComponentsProps { }

const Title = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
}

export default Title;