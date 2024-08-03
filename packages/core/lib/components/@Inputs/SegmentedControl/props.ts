// types
import type { ReactNode } from "react";
import type { PolarProps } from "../../../@Types/props";
import type { PolarSize } from "../../../@Types/types";

interface SegmentOptionValues {
    value: string;
    label: ReactNode;
    disabled?:  boolean | true;
}


export interface SegmentProps extends PolarProps {
    // defines whether the items in the segment will have borders to separate them
    borderlessItems?: boolean | true;

    // defines whether the segment will occupy the full length of the parent element
    fullWidth?: boolean | true;

    // activates the segment embroidery
    withBorder?: boolean | true;

    // defines whether the segment will be `horizontal` or `vertical`    
    orientation?: 'horizontal' | 'vertical';

    // segment radio input group name
    name?: string;

    // defines the segment size
    size?: PolarSize;

    // segment data/info
    data: (string | SegmentOptionValues)[];

    defaultValue?: string;

    onChange?: (value: string) => void;

    // disables the entire segment
    disabled?: boolean | true;
}