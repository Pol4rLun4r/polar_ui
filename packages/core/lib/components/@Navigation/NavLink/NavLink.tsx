import { useEffect, useState } from "react";

// framer motion
import { Variants } from "framer-motion";

// style
import { Container, Content, NavLinkStyle, LinkNested, ContainerNested } from "./style/NavLink"

// type
import type { NavLinkProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props";

// component
import Icon from "./Icon"
import NavLinkGroup from "./NavLinkGroup";

interface Props extends NavLinkProps, PolarStyledComponentsProps { }

const containerVariants: Variants = {
    closed: {
        opacity: 0,
        height: "0",
        transitionEnd: {
            display: "none"
        },
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
        }
    },
    open: {
        opacity: 1,
        height: "auto",
        display: "block",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
            display: { duration: 0 }
        }
    }
}

const NavLink = ({ label, variant, active, nested, href, to, opened, target, as, ...props }: Props) => {
    const NavProps = { label, variant, nested, active }
    const LinkProps = { href, to, target }
    const HandleAs = { as }

    const [isNested, setIsNested] = useState(false);
    const [isOpen, setIsOpen] = useState(opened !== undefined ? opened : false);

    // const isLink: boolean = !isNested && href !== undefined || to !== undefined;
    const isLink: boolean = !isNested;

    useEffect(() => {
        props.children ? setIsNested(true) : setIsNested(false);
    }, [props.children])

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Container {...props}>
            {isLink ?
                <Content as={HandleAs.as ? HandleAs.as : "a"} isOpen={isOpen} {...LinkProps} nested={isNested} >
                    <NavLinkStyle {...NavProps} nested={isNested}>
                        {label}
                    </NavLinkStyle>
                </Content>
                :
                <Content onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} nested={isNested}>
                    <NavLinkStyle {...NavProps} nested={isNested}>
                        {label}
                    </NavLinkStyle>
                    {isNested && (<Icon />)}
                </Content>
            }
            <ContainerNested
                layout
                transition={{
                    layout: { duration: 0.3, type: "spring", bounce: 0 },
                }}
                variants={containerVariants}
                initial={opened === true ? "open" : "closed"}
                animate={isOpen ? "open" : "closed"}
            >
                {isNested && (
                    <LinkNested>
                        {props.children}
                    </LinkNested>
                )}
            </ContainerNested>
        </Container >
    )
}

NavLink.Group = NavLinkGroup;

export default NavLink