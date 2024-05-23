// style
import Style from "./style/Text"

// types
import type { TextProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props"

interface Props extends TextProps, PolarStyledComponentsProps { }

const Text = ({ children, ...props }: Props) => {
    return (
        <Style {...props}>{children}</Style>
    )
}

export default Text