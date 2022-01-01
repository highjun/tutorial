const pressed = {
    'ArrowLeft': false,
    'ArrowRight': false,
    'ArrowDown': false,
    'ArrowUp': false,
    'z': false,
    'x': false
}
const max_velocity = {
    'angular': .03,
    'linear': 1
}

function onkeydown(ev, agent) {
    switch (ev.key) {
        case "ArrowLeft":
            pressed['ArrowLeft'] = true;
            agent.setVelocityX(-max_velocity['linear']);
            break;
        case "ArrowRight":
            pressed['ArrowRight'] = true;
            agent.setVelocityX(max_velocity['linear']);
            break;
        // case "ArrowUp":
        //     pressed['ArrowUp'] = true;
        //     agent.setVelocityY(-1);
        //     break;
        case "ArrowDown":
            pressed['ArrowDown'] = true;
            agent.setVelocityY(2 * max_velocity['linear']);
            break;
        case "z":
            pressed['z'] = true;
            agent.setAngularVelocity(-max_velocity['angular']);
            break;
        case "x":
            pressed['x'] = true;
            agent.setAngularVelocity(max_velocity['angular']);
            break;
    }
}
function onkeyup(ev, agent) {
    switch (ev.key) {
        case "ArrowLeft":
            pressed['ArrowLeft'] = false;
            agent.setVelocityX(pressed['ArrowRight'] ? max_velocity['linear'] : 0);
            break;
        case "ArrowRight":
            pressed['ArrowRight'] = false;
            agent.setVelocityX(pressed['ArrowLeft'] ? -max_velocity['linear'] : 0);
            break;
        // case "ArrowUp":
        //     pressed['ArrowUp'] = false;
        //     agent.setVelocityY(pressed['ArrowDown']? -1:0);
        //     break;
        case "ArrowDown":
            pressed['ArrowDown'] = false;
            // agent.setVelocityY(pressed['ArrowUp']? 1:0);
            agent.setVelocityY(max_velocity['linear']);
            break;
        case "z":
            pressed['z'] = false;
            agent.setAngularVelocity(pressed['x'] ? max_velocity['angular'] : 0);
            break;
        case "x":
            pressed['x'] = false;
            agent.setAngularVelocity(pressed['z'] ? -max_velocity['angular'] : 0);
            break;
    }
}