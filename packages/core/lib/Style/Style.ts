import { css } from "styled-components";

// type
import type { PolarStyleProps } from "../@Types/style-props";

// settings
import { FontSize, FontWeight } from "./typography/Typography.style";
import { Gap } from "./size/Gap.style";
import { Padding } from "./size/Padding.style";
import { BorderRadius } from "./size/Radius.style";

const Style = () => {
    return css`

    flex-direction: ${({ direction }: PolarStyleProps) => direction};
    justify-content: ${({ justify }: PolarStyleProps) => justify};
    align-items: ${({ align }: PolarStyleProps) => align};
    ${Gap()};

    width: ${({ width }: PolarStyleProps) => width};
    height: ${({ height }: PolarStyleProps) => height};
    
    max-width: ${({ maxWidth }: PolarStyleProps) => maxWidth};
    min-width: ${({ minWidth }: PolarStyleProps) => minWidth};
    max-height: ${({ maxHeight }: PolarStyleProps) => maxHeight};
    min-height: ${({ minHeight }: PolarStyleProps) => minHeight};

    margin-top: ${({ marginTop }: PolarStyleProps) => marginTop};
    margin-bottom: ${({ marginBottom }: PolarStyleProps) => marginBottom};
    margin-left: ${({ marginLeft }: PolarStyleProps) => marginLeft};
    margin-right: ${({ marginRight }: PolarStyleProps) => marginRight};
    margin: ${({ margin }: PolarStyleProps) => margin};

    ${Padding()}

    ${BorderRadius()}

    ${FontWeight()};
    text-align: ${({ textAlign }: PolarStyleProps) => textAlign};
    ${FontSize()};
    line-height: ${({ lineHeight }: PolarStyleProps) => lineHeight};
    letter-spacing: ${({ letterSpacing }: PolarStyleProps) => letterSpacing};
    text-transform: ${({ textTransform }: PolarStyleProps) => textTransform};

    position: ${({ position }: PolarStyleProps) => position};
    display: ${({ display }: PolarStyleProps) => display};
    top: ${({ top }: PolarStyleProps) => top};
    left: ${({ left }: PolarStyleProps) => left};
    bottom: ${({ bottom }: PolarStyleProps) => bottom};
    right: ${({ right }: PolarStyleProps) => right};

    background-color: ${({ backgroundColor }: PolarStyleProps) => backgroundColor};
    color: ${({ color }: PolarStyleProps) => color};
`;
};

export default Style;