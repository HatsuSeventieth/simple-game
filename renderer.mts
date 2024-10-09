export function drawRectangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    style: string,
) {
    ctx.fillStyle = style;
    ctx.fillRect(x, y, width, height);
}

export function createCanvas(
    parent: HTMLElement, width: number, height: number,
): CanvasRenderingContext2D {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    parent.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (ctx === null) {
        throw "Canvas 2D rendering context is not available";
    }

    return ctx;
}

export function createLoop(
    ctx: CanvasRenderingContext2D,
    updateFunc: (ctx: CanvasRenderingContext2D, dt: number) => void,
) {
    let prevTimestamp: number | undefined = undefined;

    function frame(timestamp: number) {
        if (prevTimestamp === undefined) {
            prevTimestamp = timestamp;
            window.requestAnimationFrame(frame);
            return;
        }

        updateFunc(ctx, prevTimestamp - timestamp);

        window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
}