// style
import ColorSwatchStyle, { Background, BackgroundAlpha, Container } from "./style/ColorSwatch"

// type
import type { ColorSwatchProps } from "./props"; 
import { PolarStyledComponentsProps } from "../../../@Types/props";

interface Props extends ColorSwatchProps, PolarStyledComponentsProps { }

const ColorSwatch = (props: Props) => {
    return (
        <Container>
            <Background size={props.size} circle={props.circle}></Background>
            <BackgroundAlpha size={props.size} circle={props.circle}></BackgroundAlpha>
            <ColorSwatchStyle {...props}>
                {props.children}
            </ColorSwatchStyle>
        </Container>
    )
}

export default ColorSwatch