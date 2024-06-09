// settings menu
import { useState } from "react";
import { useLayer } from "react-laag";

// animation
import { Variants } from "framer-motion";

// style
import { MenuContainer, MenuLauncher } from "./style/Menu";

// subComponents
import MenuItem from "./MenuItem/MenuItem";
import MenuLabel from "./MenuLabel/MenuLabel";
import MenuDivider from "./MenuDivider/MenuDivider";

// types
import type { MenuProps } from "./props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

const containerVariants: Variants = {
    open: {
        opacity: 1,
        y: 10,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
        }
    },
    closed: {
        opacity: 0,
        y: -10,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
        }
    }
}

interface Props extends MenuProps, PolarStyledComponentsProps { }

const Menu = (props: Props) => {
    const [isOpen, setOpen] = useState(false);

    const { renderLayer, triggerProps, layerProps } = useLayer({
        isOpen,
        overflowContainer: false,
        placement: "bottom-center",
        triggerOffset: 10,
        onOutsideClick: () => setOpen(false),
        auto: true
    });

    return (
        <>
            <MenuLauncher {...triggerProps} onClick={() => setOpen(!isOpen)}>
                {props.menuLauncher}
            </MenuLauncher>

            {renderLayer(
                <MenuContainer
                    {...layerProps}
                    variants={containerVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                >
                    {props.children}
                </MenuContainer>
            )}
        </>
    )
}

Menu.item = MenuItem;
Menu.label = MenuLabel;
Menu.divider = MenuDivider;

export default Menu;