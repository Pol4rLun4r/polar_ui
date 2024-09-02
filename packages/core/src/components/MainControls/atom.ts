import { atom } from "recoil";

type mode = 'dark' | 'light';

export const colorMode = atom({
    key: 'colorMode',
    default: 'dark' as mode
});