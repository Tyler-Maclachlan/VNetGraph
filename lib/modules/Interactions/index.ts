export function getMousePosition(canvas: HTMLElement, e: MouseEvent) {
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;

    return {
        x, y
    };
}