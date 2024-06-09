// types
import type { MenuItemProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../../@Types/props"

// style
import Style from "./style/MenuItem"

interface Props extends MenuItemProps, PolarStyledComponentsProps { }

function MenuItem(props: Props) {
    return (
        <Style
            {...props}
        >
            <div className="leftSection">
                {props.leftSection}
            </div>
            <div className="children">
                {props.children}
            </div>
            <div className="rightSection">
                {props.rightSection}
            </div>
        </Style>
    )
}

export default MenuItem