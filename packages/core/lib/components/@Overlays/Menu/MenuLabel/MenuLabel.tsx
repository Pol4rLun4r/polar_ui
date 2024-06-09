// style
import Style from "./style/MenuLabel";

// types
import type { PolarProps } from "../../../../@Types/props";
import type { PolarStyledComponentsProps } from "../../../../@Types/props";

interface Props extends PolarProps, PolarStyledComponentsProps { }

function MenuLabel({ children, ...props }: Props) {
  return (
    <Style {...props}>{children}</Style>
  );
}

export default MenuLabel;