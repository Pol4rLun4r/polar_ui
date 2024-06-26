import styled from "styled-components";

// type
import type { LayoutComponentsProps } from "../../../../@Types/props";

// colors
import { boxBackgroundColor, boxBorderColor } from "../../../../Theme/Themes/Layout/Box";

// default settings
import Style from "../../../../Style/Style";
import { $Paddings } from "../../../../@Sizes/Buttons";

const Box = styled.div<LayoutComponentsProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? '' : 'row '};
    background-color: ${boxBackgroundColor};
    border: solid 1px ${boxBorderColor};
    padding:  ${({ padding }) => padding ? '' : $Paddings.sm };
    flex-wrap: wrap;

    // variants de configuração
    align-items: ${({ align }) => align ? '' : 'center'};
    justify-content: ${({ justify }) => justify ? '' : 'center'};

    & > * {
        ${({ grow }) => grow ? 'flex-grow: 1;' : ''}
    }
`

export default Box;