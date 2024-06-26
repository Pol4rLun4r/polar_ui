import { useState } from 'react';

// style
import { Container, InputCheckbox, Label, InputWrapper, CheckBoxWrapper, HideOverflow, Asterisk, Description, ErrorMessage } from "./style/Checkbox";

// Icon
import Icon from "./Icon";

// types
import type { CheckboxProps } from "./props";
import { PolarHTMLInputElement } from "../../../@Types/props";

interface Props extends CheckboxProps, PolarHTMLInputElement { }

const Checkbox = ({ value, onChange, placeholder, radius, accept, alt, autoComplete, capture, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step, disabled, register, ...props }: Props) => {
    const InputProps = {
        value, onChange, placeholder, radius, accept, alt, autoComplete, capture, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step, disabled
    }

    const [isChecked, setIsChecked] = useState(false);

    return (
        <Container
            {...props}
            disabled={disabled}
            checked={isChecked}>
            <InputWrapper onClick={() => setIsChecked((prev) => disabled ? false : !prev)}>
                <CheckBoxWrapper>
                    <InputCheckbox
                        {...InputProps}
                        {...register}
                        id={name}
                        checked={isChecked}
                        onChange={() => setIsChecked((prev) => !prev)}
                    />
                    <HideOverflow>
                        <Icon checked={isChecked} />
                    </HideOverflow>
                </CheckBoxWrapper>
                <Label htmlFor={name}>
                    {props.label}
                    {props.withAsterisk && (
                    <Asterisk> *</Asterisk>
                )}
                </Label>
            </InputWrapper>
            <Description>
                {props.description}
            </Description>
            {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
        </Container>
    )
}

export default Checkbox;