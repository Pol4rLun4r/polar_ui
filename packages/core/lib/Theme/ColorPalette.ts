export type Palette = {
  colorName: string,
  schema: string[]
}

const ColorPalette: Palette[] = [
  {
    colorName: "magenta",
    schema: [
      "#ffe9f6",
      "#ffd1e6",
      "#faa1c9",
      "#f66eab",
      "#f24391",
      "#f02881",
      "#f01879",
      "#d60867",
      "#c0005c",
      "#a9004f"
    ]
  },
  {
    colorName: "blueYonder",
    schema: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81"
    ]
  },
  {
    colorName: "violet",
    schema: [
      "#f6ecff",
      "#e7d6fb",
      "#caabf1",
      "#ac7ce8",
      "#9354e0",
      "#833cdb",
      "#7b2eda",
      "#6921c2",
      "#5d1cae",
      "#501599"
    ]
  },
  {
    colorName: "lightBlue",
    schema: [
      "#e0fbff",
      "#cbf2ff",
      "#9ae2ff",
      "#64d2ff",
      "#3cc5fe",
      "#23bcfe",
      "#09b8ff",
      "#00a1e4",
      "#0090cd",
      "#007cb5"
    ]
  },
  {
    colorName: "green",
    schema: [
      "#e5feee",
      "#d2f9e0",
      "#a8f1c0",
      "#7aea9f",
      "#53e383",
      "#3bdf70",
      "#2bdd66",
      "#1ac455",
      "#0caf49",
      "#00963c"
    ],
  },
  {
    colorName: "deepOrange",
    schema: [
      "#fff4e2",
      "#ffe9cc",
      "#ffd09c",
      "#fdb766",
      "#fca13a",
      "#fb931d",
      "#fc8c0c",
      "#e17900",
      "#c86a00",
      "#ae5a00"
    ]
  },
  {
    colorName: "peachPink",
    schema: [
      "#ffede9",
      "#fbdcd6",
      "#efb7ac",
      "#e49080",
      "#db6f5a",
      "#d55941",
      "#d44e34",
      "#bc3e27",
      "#a83621",
      "#942b19"
    ]
  },
  { 
    colorName: "blueGray",
    schema: [
      "#f3f3fe",
      "#e4e6ed",
      "#c8cad3",
      "#a9adb9",
      "#9093a4",
      "#808496",
      "#767c91",
      "#656a7e",
      "#585e72",
      "#4a5167"
    ]
  },
]

export default ColorPalette;

export const colorNames = ColorPalette.map(color => color.colorName);