
export function showCSS(Element: HTMLElement) {
    const computedStyles = window.getComputedStyle(Element)
    const styles = Array.from(computedStyles).reduce((acc, property) => {
    return `${acc}${property}: ${computedStyles.getPropertyValue(property)};\n`
    }, '')
    console.log(styles)
}