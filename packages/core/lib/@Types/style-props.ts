import type { PolarSize, PolarFontWeight } from "./types";

export interface PolarStyleProps {
    direction?: React.CSSProperties['flexDirection'] | (string & NonNullable<unknown>);
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    gap?: PolarSize | (string & NonNullable<unknown>);

    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];

    maxWidth?: React.CSSProperties['maxWidth'];
    minWidth?: React.CSSProperties['minWidth'];
    maxHeight?: React.CSSProperties['maxHeight'];
    minHeight?: React.CSSProperties['minHeight'];

    marginTop?: React.CSSProperties['marginTop'];
    marginBottom?: React.CSSProperties['marginBottom'];
    marginLeft?: React.CSSProperties['marginLeft'];
    marginRight?: React.CSSProperties['marginRight'];
    margin?: React.CSSProperties['margin'];

    paddingTop?: PolarSize | (string & NonNullable<unknown>) | React.CSSProperties['paddingTop'];
    paddingBottom?: PolarSize | React.CSSProperties['paddingBottom'];
    paddingLeft?: PolarSize | React.CSSProperties['paddingLeft'];
    paddingRight?: PolarSize | React.CSSProperties['paddingRight'];
    padding?: PolarSize | React.CSSProperties['padding'];

    radius?: PolarSize;

    fontWeight?: PolarFontWeight | number | (string & NonNullable<unknown>);
    textAlign?: React.CSSProperties['textAlign'];
    fontSize?: PolarSize | (string & NonNullable<unknown>);
    lineHeight?: (string & NonNullable<unknown>) | React.CSSProperties['lineHeight'];
    letterSpacing?: React.CSSProperties['letterSpacing'];
    textTransform?: React.CSSProperties['textTransform'];

    position?: React.CSSProperties['position'];
    display?: React.CSSProperties['display'];
    top?: React.CSSProperties['top'];
    left?: React.CSSProperties['left'];
    bottom?: React.CSSProperties['bottom'];
    right?: React.CSSProperties['right'];

    backgroundColor?: React.CSSProperties['backgroundColor'];
    color?: React.CSSProperties['color'];
}