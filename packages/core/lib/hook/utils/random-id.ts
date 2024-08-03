export function randomId() {
    return `polar-${Math.random().toString(32).slice(2, 11)}`;
}