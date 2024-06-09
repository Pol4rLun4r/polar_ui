import styled from "styled-components";

// colors
import { dividerMenu } from "../../../../../Theme/Themes/Overlays/Menu";

export const MenuDivider = styled.div`
    // default settings
    margin-top: .25rem;
    margin-bottom: .25rem;
    border-top: .0625rem solid;
    border-color: ${dividerMenu};
`;