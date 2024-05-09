// style
import MenuStyle from "./style/MenuItem"

// type
import type { MenuItemProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../../@Types/props"

// motion
import { Variants } from "framer-motion"

interface Props extends MenuItemProps, PolarStyledComponentsProps { }

const itemVariants: Variants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.10 * index,
        }
    })
}

function MenuItem(props: Props) {
    return (
        <MenuStyle
            variants={itemVariants}
            initial="initial"
            animate="animate"
            custom={props.index}
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
        </MenuStyle>
    )
}

export default MenuItem