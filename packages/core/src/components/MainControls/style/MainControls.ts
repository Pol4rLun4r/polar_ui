import styled from "styled-components";

// colors
import { boxBorderColor } from "../../../../lib/Theme/Themes/Layout/Box";

// sizes
import { $Spacing } from "../../../../lib/@Sizes/Spacings";

export const Container = styled.div`
    border-left: 1px solid ${boxBorderColor};
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: center;
    padding: ${$Spacing.sm}
`