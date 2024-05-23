import styled from "styled-components";

// theme
import { titleColor } from "../../../../Theme/Themes/Typography/Title";

// default settings
import Style from "../../../../Style/Style";

// sizes
import { $FontSizeHeadings } from "../../../../@Sizes/Typography";

// types
import type { TitleProps } from "../props";

const Headings = ({ order, fontSize }: TitleProps) => {
    return (
        fontSize ? '' :
            order === "h1" ? $FontSizeHeadings.h1 :
                order === "h2" ? $FontSizeHeadings.h2 :
                    order === "h3" ? $FontSizeHeadings.h3 :
                        order === "h4" ? $FontSizeHeadings.h4 :
                            order === "h5" ? $FontSizeHeadings.h5 :
                                order === "h6" ? $FontSizeHeadings.h6 : $FontSizeHeadings.h1
    )
}

const Title = styled.h1<TitleProps>`
    color: ${titleColor};
    ${Style()}

    // Headings
    font-size: ${({ order, fontSize }) => Headings({ order, fontSize})};
`

export default Title;