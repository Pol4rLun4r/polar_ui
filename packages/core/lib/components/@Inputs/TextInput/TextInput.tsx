// style
import { Asterisk, Container, Description, Input, InputWrapper, Label, LeftSection, RightSection, ErrorMessage } from "./style/TextInput";

// type
import type { PolarHTMLInputElement } from "../../../@Types/props";
import type { InputsProps } from "./props";

interface Props extends InputsProps, PolarHTMLInputElement { }

const TextInput = ({value, onChange, placeholder, radius, accept, alt, autoComplete, capture, checked, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step, disabled, register,...props}: Props) => {
    const InputProps = {
        value, onChange, placeholder, radius, accept, alt, autoComplete, capture, checked, defaultChecked, defaultValue, dir, form, formAction, formEncType, formMethod, formNoValidate, formTarget, max, min, maxLength, minLength, multiple, name, pattern, readOnly, required, step, disabled
    }

    return (
        <Container {...props} disabled={disabled}>
            <Label htmlFor={name}>
                {props.label}
                {props.withAsterisk && (
                    <Asterisk> *</Asterisk>
                )}
            </Label>
            <Description>
                {props.description}
            </Description>
            <InputWrapper>
                {props.leftSection && (
                    <LeftSection>
                        {props.leftSection}
                    </LeftSection>
                )}
                <Input {...InputProps} id={name} {...register} />
                {props.rightSection && (
                    <RightSection>
                        {props.rightSection}
                    </RightSection>
                )}
            </InputWrapper>
            {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
        </Container>
    )
}

export default TextInput;