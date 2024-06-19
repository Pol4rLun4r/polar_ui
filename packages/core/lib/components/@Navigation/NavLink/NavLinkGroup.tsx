// style
import { Label, Container, LabelContainer, LeftSection } from "./style/NavLinkGroup";

// types
import type { NavLinkGroupProps } from "./props"
import type { PolarStyledComponentsProps } from "../../../@Types/props"

interface Props extends NavLinkGroupProps, PolarStyledComponentsProps { }

function NavLinkGroup({ label, leftSection, ...props }: Props) {

    return (
        <Container {...props} className="navLinkContainerGroup">
            <LabelContainer>
                <LeftSection>{leftSection}</LeftSection>
                <Label>{label}</Label>
            </LabelContainer>
            {props.children}
        </Container>
    );
}

export default NavLinkGroup