import styled from "styled-components";

// types
import type { SegmentProps } from "../props";

// style
import { Style } from "polar_ui";

// colors
import { segmentBackgroundColor, segmentBorderColor, SegmentLabel, SegmentLabelActive, SegmentLabelDisable } from "../../../../Theme/Themes/Inputs/SegmentControl";

// sizes
import { LabelContainerSize, LabelSize } from "./Size";

export const Option = styled.div`
`;

export const LabelContainer = styled.label`
    display: block;
    color: ${({ isDisable, checked }: { isDisable?: boolean, checked?: boolean }) => isDisable ? SegmentLabelDisable :  checked ? SegmentLabelActive : SegmentLabel};
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
    /* gap:0; */
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

        // sizes
        ${LabelContainer} {
            ${LabelContainerSize()}
            ${({ disabled }) => disabled ? 'cursor: not-allowed;' : ''};
        }

        ${Label}{
            ${LabelSize()}
        }
`;
