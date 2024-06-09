import styled from "styled-components";
import { motion } from "framer-motion";

// colors
import { bodyMenu, borderMenu } from "../../../../Theme/Themes/Overlays/Menu";

// sizes
import { $Radius } from "../../../../@Sizes/Radius";

export const MenuContainer = styled(motion.ul)`
    // default
    display: flex;
    flex-direction: column;

    width: 10.813rem;

    background-color: ${bodyMenu};

    border: solid 1px ${borderMenu};
    border-radius: ${$Radius.sm};

    padding: 0.25rem;
`

export const MenuLauncher = styled.div`
    cursor: pointer;
`