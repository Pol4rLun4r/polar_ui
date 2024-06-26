import styled from "styled-components";

// style
import Style from "../../../../Style/Style";

// Colors
import { cardBodyPrimary } from "../../../../Theme/Themes/DataDisplay/Card";

//size
import { BorderRadiusGroup } from "../../../../Style/size/RadiusGroup.style";
import { $Spacing } from "../../../../@Sizes/Spacings";

// type
import type { CardProps } from "../props";

//settings
import { PaddingFirstChild, PaddingLastChild, PaddingChild } from "./PaddingSections";
import { WithBorder } from "../../style/WithBorder";
import { BorderFirstChild, BorderLastChild, BorderChild } from "./WithBorder";

export const CardSectionStyle = styled.div<CardProps>`
    ${Style()}

    //default
    & > * {
        width: 100%;
        height: 100%; 
    }

    &:first-child {
        ${({ withBorder }) => withBorder ? BorderFirstChild() : ''}
    }

    &:not(:first-child):not(:last-child) {
        ${({ withBorder }) => withBorder ? BorderChild() : ''}
    }

    &:last-child {
        ${({ withBorder }) => withBorder ? BorderLastChild() : ''}
    }
`;

const CardStyle = styled.div<CardProps>`
    ${Style()}

    // default
    display: flex;
    flex-direction: column;
    overflow: hidden;

    width: 21.25rem;
    background-color: ${cardBodyPrimary};

    & > * {
        border-radius: 0rem;
        ${BorderRadiusGroup()}
    }

    ${({ padding }) => padding ? '' : `padding: ${$Spacing.sm};`}

    // settings
    ${CardSectionStyle}:first-child {
        ${PaddingFirstChild()}
    }

    ${CardSectionStyle}:last-child {
        ${PaddingLastChild()}
    }

    ${CardSectionStyle} {
        ${PaddingChild()}
    }

    ${({ withBorder }) => withBorder ? WithBorder() : ''}
`;

export default CardStyle;