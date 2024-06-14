import styled, { css } from "styled-components";

// style
import Style from "../../../../Style/Style";
import Variants from "./Variants";

// size
import { Size, LabelSize, DescriptionSize, SectionSize, ErrorSize } from "./Size";

// colors
import { inputDescriptionColor, inputIconColor, inputColorError } from "../../../../Theme/Themes/Inputs/Inputs";

// type
import type { InputsProps } from "../props";

export const InputWrapper = styled.div <InputsProps>`
    //default
    position: relative;
`;

export const Input = styled.input.attrs({ type: "text" })`
    ${Style()}
`;

export const Label = styled.label`
    // default
    font-weight: 500;
`;

export const Asterisk = styled.span`
    color: ${inputColorError};
`;

export const Description = styled.p`
    //default 
    color: ${inputDescriptionColor};
`;

const Section = (error: boolean | undefined) => {
    return css`
    // default
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    // settings
    color: ${error ? inputColorError : inputIconColor};
    ${SectionSize}
    `
}

export const RightSection = styled.div<InputsProps>`
    // default
    right: 0;
    z-index: 2;
`;

export const LeftSection = styled.div<InputsProps>`
    // default
    left: 0;
    z-index: 2;
`;

export const ErrorMessage = styled.div`
    color: ${inputColorError};
`;

export const Container = styled.div<InputsProps>`
    //default
    ${Style()}

    //settings
    ${Variants()}

    ${Label}{
        // settings
        ${LabelSize()}
    }

    ${Description}{
        // settings
        ${DescriptionSize()}
    }

    ${InputWrapper}{
        //settings
        ${({ description }) => description ? 'margin-top: 5px;' : 'margin-top: 3px;'}
        ${({ error }) => error ? 'margin-bottom: 5px;' : 'margin-bottom: 3px;'}
    }

    ${Input}{
        // settings
        ${Size()}
    }

    ${ErrorMessage}{
        //settings
        ${ErrorSize()}
    }

    ${LeftSection} {
        //settings
        ${({ error }) => Section(error)}
        ${({ disabled }) => disabled ? 'opacity: .6;' : ''}
    }

    ${RightSection} {
        //settings
        ${({ error }) => Section(error)}
        ${({ disabled }) => disabled ? 'opacity: .6;' : ''}
    }
`;