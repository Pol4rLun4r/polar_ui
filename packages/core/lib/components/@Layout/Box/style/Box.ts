import styled from "styled-components";

// type
import type { BoxProps } from "../props";

// colors
import { boxBackgroundColorPrimary, boxBackgroundColorSecondary, boxBorderColor } from "../../../../Theme/Themes/Layout/Box";

// default settings
import Style from "../../../../Style/Style";
import { $Paddings } from "../../../../@Sizes/Buttons";

const Box = styled.div<BoxProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? '' : 'row '};
    background-color: ${({ backgroundStyle }) => backgroundStyle === 'secondary' ? boxBackgroundColorSecondary : boxBackgroundColorPrimary };
    padding:  ${({ padding }) => padding ? '' : $Paddings.sm};
    flex-wrap: wrap;
    
    // variants de configuração
    align-items: ${({ align }) => align ? '' : 'center'};
    justify-content: ${({ justify }) => justify ? '' : 'center'};
    ${({ disableBorder }) => disableBorder ? '' : 'border: solid 1px;'};
    border-color: ${boxBorderColor};

    & > * {
        ${({ grow }) => grow ? 'flex-grow: 1;' : ''}
    }
`

export default Box;