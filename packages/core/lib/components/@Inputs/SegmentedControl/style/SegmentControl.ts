import styled from "styled-components";

// types
import type { SegmentProps } from "../props";

// style
import { Style } from "polar_ui";

// colors
import { segmentBackgroundColor, segmentBorderColor, SegmentLabel, SegmentLabelActive, SegmentLabelDisable, SegmentSeparator } from "../../../../Theme/Themes/Inputs/SegmentControl";

// sizes
import { LabelContainerSize, LabelSize } from "./Size";

export const Option = styled.div`
    width: 100%;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        background-color: ${({ isNext, isSelected }: { isNext: boolean, isSelected: boolean }) => isNext || isSelected ? '#00000000' : SegmentSeparator};  
    }
`;

export const LabelContainer = styled.label`
    display: block;
    text-align: center;
    color: ${({ isDisable, checked }: { isDisable?: boolean, checked?: boolean }) => isDisable ? SegmentLabelDisable : checked ? SegmentLabelActive : SegmentLabel};
    transition: color 200ms;

    cursor: ${({ isDisable }: { isDisable?: boolean }) => isDisable ? 'not-allowed' : 'pointer'};

    &:hover{
        color: ${({ isDisable }: { isDisable?: boolean }) => isDisable ? null : SegmentLabelActive};
    }
`;

export const Label = styled.span`
    // default
    position: relative;
    z-index: 1;
    font-weight: 500;
`;

export const ControlInput = styled.input.attrs({ type: 'radio' })`
    // default
    height: 0;
    width: 0;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
`;

export const Container = styled.div<Omit<SegmentProps, 'data'>>`
    ${Style()}

    // default
    gap:0;
    padding: 0.250rem;
    background-color: ${segmentBackgroundColor};
    display: flex;
    position: relative;
    user-select: none;

    // settings
    flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
    ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};
    ${({ withBorder }) => withBorder ? 'border: solid 1px;' : ''};
    border-color: ${segmentBorderColor};
    ${({ disabled }) => disabled ? 'cursor: not-allowed;' : ''};
    ${({ disabled }) => disabled ? 'opacity: 0.5;' : ''};

    ${Option} {
        &::before {
            ${({ borderlessItems }) => borderlessItems ? 'background-color: #00000000;' : ''};
            width: ${({ orientation }) => orientation === 'vertical' ? '100%' : '.0625rem'};
            height: ${({ orientation }) => orientation === 'vertical' ? '.0625rem' : ''}
        }

        &:first-child {
            &::before{
                background-color: #00000000;
            }
        }
    }

        // sizes
        ${LabelContainer} {
            ${LabelContainerSize()}
            ${({ disabled }) => disabled ? 'cursor: not-allowed;' : ''};
        }

        ${Label}{
            ${LabelSize()}
        }
`;
