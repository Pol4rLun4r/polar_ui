import styled from "styled-components";
import { motion } from "framer-motion";

// style
import Style from "../../../../Style/Style"

// settings
import Variants from "./Variants";

export const MenuContainer = styled(motion.ul)`
    // settings
    ${Variants()}
`

export const MenuLauncher = styled.div`
    ${Style()}

    // default
    cursor: pointer;
`