// types
import type { HTMLMotionProps } from "framer-motion"; // props de input do framer motion
import type { ButtonHTMLAttributes, BaseHTMLAttributes } from "react"; // props básicas do html
import type { ReactNode } from "react";
import type { PolarStyleProps } from "./style-props"; // props de estilo

export interface PolarProps extends PolarStyleProps {
    children?: ReactNode;
}

export interface PolarStyledComponentsProps extends Omit<BaseHTMLAttributes<"div">, "color">  {
    as?: any | (string & NonNullable<unknown>);
}

export interface PolarStyledComponentsOnlyAsProps {
    as?: any | (string & NonNullable<unknown>);
}

export interface PolarHTMLInputElement extends Omit<HTMLMotionProps<"input">, "width" | "children" | "color" | "disabled" | "size" | "height"> {
    as?: any | (string & NonNullable<unknown>);
}

export interface PolarHTMLButtonElement extends Omit<ButtonHTMLAttributes<"div">, "color">{
    as?: any | (string & NonNullable<unknown>);
}

export interface LayoutComponentsProps extends PolarProps {
    grow?: true;
}