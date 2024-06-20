import styled from "styled-components";
import { motion } from "framer-motion";

// types
import type { MenuItemProps } from "../props";

// setting
import { DefaultSetting, Size } from "./Settings";

const MenuItem = styled(motion.li)`
    .leftSection {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: ${({ leftSection }: MenuItemProps) => leftSection ? '0.5rem;' : '0rem'};
    }
    // settings
    ${Size()}
    ${DefaultSetting()}
`

export default MenuItem;