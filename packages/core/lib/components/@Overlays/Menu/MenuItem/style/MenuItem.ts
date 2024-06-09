import styled from "styled-components";
import { motion } from "framer-motion";

// types
import type { MenuItemProps } from "../props";

// setting
import { DefaultSetting, Size } from "./Settings";

const Style = styled(motion.li)`
    .leftSection {
        padding-right: ${({ leftSection }: MenuItemProps) => leftSection ? '0.5rem;' : '0rem'};
    }
    // settings
    ${Size()}
    ${DefaultSetting()}
`

export default Style;