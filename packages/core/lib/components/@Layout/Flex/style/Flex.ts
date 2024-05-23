import styled from "styled-components";

// type
import type { PolarProps } from "../../../../@Types/props";

// default settings
import Style from "../../../../Style/Style";

const Flex = styled.div`
    ${Style()}

    // default
    display: flex;

    // variants de configuração
    align-items: ${({ align }: PolarProps) => align ? align : 'center'};
    justify-content: ${({ justify }: PolarProps) => justify ? justify : 'center'};

`

export default Flex;