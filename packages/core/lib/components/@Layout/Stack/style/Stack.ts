import styled from "styled-components";

// style
import Style from "../../../../Style/Style";

// type
import type { PolarProps } from "../../../../@Types/props";

const Stack = styled.div<PolarProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'column'};

    // variants de configuração
    align-items: ${({ align }) => align ? align : 'center'};
    justify-content: ${({ justify }) => justify ? justify : 'center'};

`

export default Stack;