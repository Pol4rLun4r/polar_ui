import { useState } from "react";

// hook
import { useId } from "../../../hook/use-id";

// types
import type { SegmentProps } from "./props";
import type { PolarStyledComponentsProps } from "../../../@Types/props";

// style
import { Container, Label, ControlInput, Option, LabelContainer } from "./style/SegmentControl";

// color
import { SegmentIndicatorColor } from "../../../Theme/Themes/Inputs/SegmentControl";

// subComponents
import { FloatingIndicator } from "polar_ui"

interface Props extends SegmentProps, Omit<PolarStyledComponentsProps, 'defaultValue' | 'onChange'> { }

const SegmentedControl = ({ data, name, defaultValue, onChange, ...props }: Props) => {

    const processData = data?.map((item) =>
        typeof item === 'string' ? { label: item, value: item, disabled: false } : item
    );

    const checkDisableValue = processData.filter((item) => item.disabled !== true);

    const initialValue = () => {
        const checkFirstItem = checkDisableValue[0].value;
        const value = defaultValue !== undefined ? defaultValue : checkFirstItem;
        return value;
    }

    const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);
    const [targetRef, setTargetRef] = useState<Record<string, HTMLDivElement | null>>({});
    const [active, setActive] = useState(initialValue());

    const setControlTarget = (val: string) => (node: HTMLDivElement) => {
        targetRef[val] = node;
        setTargetRef(targetRef);
    }

    const handleActive = (itemValue: string) => {
        setActive(itemValue);
        onChange?.(itemValue);
    }

    const uuid = useId(name);

    const control = processData?.map((item) => (
        <Option
            data-key={item.value}
            key={item.value}
            onClick={() => item.disabled ? null : props.disabled ? null : handleActive(item.value)}
            ref={setControlTarget(item.value)}
        >
            <ControlInput
                name={uuid}
                value={item.value}
                key={`${item.value}-input`}
                checked={active === item.value}
                onChange={() => { }}
            />
            <LabelContainer
                isDisable={item.disabled}
                checked={active === item.value}
                htmlFor={uuid}
            >
                <Label>{item.label}</Label>
            </LabelContainer>
        </Option>
    ));

    if (data?.length === 0) {
        return null;
    }

    return (
        <Container {...props} ref={setParentRef}>
            {control}
            <FloatingIndicator
                boxShadow="0 2px 3px 0 rgba(0, 0, 0, 0.123)"
                color={SegmentIndicatorColor}
                radius={props.radius}
                Detection={props.size! + props.orientation!}
                parent={parentRef}
                target={targetRef[active]}
            />
        </Container>
    )
}

export default SegmentedControl