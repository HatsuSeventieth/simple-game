"use strict";
export function drawRectangle(ctx, x, y, width, height, style) {
    ctx.fillStyle = style;
    ctx.fillRect(x, y, width, height);
}
export function createCanvas(parent, width, height) {
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
export function createLoop(ctx, updateFunc) {
    let prevTimestamp = undefined;
    function frame(timestamp) {
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
