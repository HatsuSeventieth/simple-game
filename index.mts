import * as renderer from "./renderer.mjs";

const WIDTH = 640;
const HEIGHT = 480;

function update(ctx: CanvasRenderingContext2D, dt: number) {
    renderer.drawRectangle(ctx, 0, 0, WIDTH, HEIGHT, 'red');
}

function main() {
    const body = document.getElementById("body");
    if (body === null) {
        throw "Could not find element with ID `body`";
    }

    const ctx = renderer.createCanvas(body, WIDTH, HEIGHT);

    renderer.createLoop(ctx, update);
}

main();