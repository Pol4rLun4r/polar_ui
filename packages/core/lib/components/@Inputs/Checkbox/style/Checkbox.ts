import styled from "styled-components";

// style
import Style from "../../../../Style/Style";
import Variants from "./Variants";

// sizes
import { DescriptionSize, ErrorSize, LabelSize, Size } from "./Size";
import { $Spacing } from "../../../../@Sizes/Spacings";

// colors
import { inputColorError, inputDescriptionColor } from "../../../../Theme/Themes/Inputs/Inputs";

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
    // default
    ${Style()}
`;

export const CheckBoxWrapper = styled.div`

    position: relative;

    & > div > svg {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 70%;
        height: 70%;
    }
`;

export const HideOverflow = styled.div`
    width: 99%;
    height: 99%;

    position: absolute;
    inset: 0;

    overflow: hidden;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

`;

export const Label = styled.label`
    font-weight: 400px;

    padding-inline-start: ${$Spacing.sm};
`;

export const Asterisk = styled.span`
    //default 
    color: ${inputColorError};
`;

export const Description = styled.p`
    //default 
    color: ${inputDescriptionColor};
`;

export const ErrorMessage = styled.div`
    //default 
    color: ${inputColorError};
`;

export const Container = styled.div`
    // default
    ${Style()}

    // settings
    ${Variants()}

    ${Label}{
        // settings
        ${LabelSize()}
    }

    ${InputCheckbox}{
        //settings
        ${Size()}
    }

    ${CheckBoxWrapper}{
        //settings
        ${Size()}
    }

    ${ErrorMessage}{
        //settings
        ${ErrorSize()}
    }

    ${Description}{
        // settings
        ${DescriptionSize()}
    }

`;