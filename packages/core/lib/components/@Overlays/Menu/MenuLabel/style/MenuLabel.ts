import styled from "styled-components";

// style
import Style from "../../../../../Style/Style"

// settings
import { Size, DefaultSetting } from "./Settings";

const MenuLabel = styled.div`
    ${Style()}

    // settings
    ${DefaultSetting()}
    ${Size()}
`

export default MenuLabel;