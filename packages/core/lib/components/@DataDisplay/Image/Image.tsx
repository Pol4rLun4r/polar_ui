// style
import Style from "./style/Image";

// types
import type { ImageProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends ImageProps, PolarStyledComponentsProps { }

const Image = ({ ...props }: Props) => {
    return (
        <Style {...props} alt="dkj" />
    )
};

export default Image;