import { css } from "styled-components";

// type
import type { CheckboxProps } from "../props";

// component
import { CheckBoxWrapper, InputCheckbox, InputWrapper, Label } from "./Checkbox";

// colors
import themeColorSchema from "../../../../hook/ThemeHook";
import { checkboxCheckedBorderDefault, checkboxBackground, checkboxBorder, checkboxCheckedBackgroundDefault, checkboxCheckedBackgroundOutline, checkboxCheckedBorderOutline, checkboxIcon } from "../../../../Theme/Themes/Inputs/Checkbox";
import { inputBackgroundDisabled, inputBorderDisabled, inputColorDisabled, inputColorError } from "../../../../Theme/Themes/Inputs/Inputs";

const setting = (error: boolean | undefined) => {
    return css`
        // settings
        appearance: none;
        background-color: ${checkboxBackground};
        border: solid 1px;
        border-color: ${error ? inputColorError : checkboxBorder};

        transition: border-color .1s ease, background-color .1s ease;
    `
}

const DefaultVariant = (error: boolean | undefined) => {
    return css`
    ${InputCheckbox} {
        // settings
        ${setting(error)}

        &:checked {
            background-color: ${themeColorSchema(checkboxCheckedBackgroundDefault)};
            border-color: ${themeColorSchema(checkboxCheckedBorderDefault)};
        }
    }

    ${InputWrapper}{
            cursor: pointer;
    }

    ${CheckBoxWrapper}{
        & > div > svg {
            color: ${checkboxIcon};
        }
    }

    `;
};

const OutlineVariant = (error: boolean | undefined) => {
    return css`
    ${InputCheckbox}{
        // settings
        ${setting(error)}

        &:checked {
            background-color: ${checkboxCheckedBackgroundOutline};
            border-color: ${themeColorSchema(checkboxCheckedBorderOutline)};
        }
    }

    ${CheckBoxWrapper}{
        & > div > svg {
            color: ${themeColorSchema(checkboxCheckedBorderOutline)};
        }
    }
    `;
};

const inputDisabled = () => {
    return css`
    ${InputCheckbox}{
        appearance: none;
        border: solid 1px;
        background-color: ${inputBackgroundDisabled};
        border-color: ${inputBorderDisabled};
    }

    ${Label} {
        color: ${inputColorDisabled};
    }

    ${InputWrapper}{
        opacity: .6;
        cursor: not-allowed;  
    }
    `;
};


const Variants = () => {
    return css`
    ${({ variant, disabled, error }: Omit<CheckboxProps, "label">) =>
            disabled ? inputDisabled() :
                variant === 'default' ? DefaultVariant(error) :
                    variant === 'outline' ? OutlineVariant(error) : DefaultVariant(error)};
`;
}

export default Variants;