import type { LayoutComponentsProps } from "../../../@Types/props"
 
export interface BoxProps extends LayoutComponentsProps {
    disableBorder?: boolean | true;
    
    backgroundStyle?: 'primary' | 'secondary';
}