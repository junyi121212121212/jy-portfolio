import Matter from "matter-js";

const { Engine, Render, World, Bodies } = Matter;

const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#1a202c",
    },
});

const ball = Bodies.circle(400, 200, 50, { restitution: 0.8 });
const ground = Bodies.rectangle(400, 600, 810, 60, { isStatic: true });

World.add(engine.world, [ball, ground]);
Engine.run(engine);
Render.run(render);