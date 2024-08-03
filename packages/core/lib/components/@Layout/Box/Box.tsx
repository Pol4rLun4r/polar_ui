// types
import type { PolarStyledComponentsProps } from "../../../@Types/props";
import type { BoxProps } from "./props";

// style
import Style from "./style/Box";

interface Props extends BoxProps, PolarStyledComponentsProps { }

const Box = ({ children, ...props }: Props) => {
    return (
        <Style
            ref={props.innerRef}
            {...props}
        >
            {children}
        </Style>
    )
};

export default Box;