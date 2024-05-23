import styled from "styled-components";

// default settings
import Style from "../../../Style/Style";

// settings
import Variants from "./style/Variants";

// types
import { TextProps } from "./props";

const Text = styled.p<TextProps>`
    ${Style()}
    ${Variants()}
`

export default Text;