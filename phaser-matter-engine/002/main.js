const canvas_width = 800;
const canvas_height = 400;

const wall_thickness = 50;

var config = {
    type: Phaser.AUTO,
    width: canvas_width,
    height: canvas_height,
    backgroundColor: '#1b1464',
    parent: 'game-container',
    physics: {
        default: 'matter',
        matter: {
            // gravity: { y: 1 },
            debug: true,
            debugBodyColor: 0xffffff
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() { }

function create() {
    var ground = this.matter.add.rectangle(canvas_width / 2, canvas_height + wall_thickness / 2, canvas_width, wall_thickness, { restitution: 0.4, isStatic: true });
    var left_wall = this.matter.add.rectangle(-wall_thickness / 2, canvas_height / 2, wall_thickness, canvas_height, { restitution: 0.4, isStatic: true });
    var right_wall = this.matter.add.rectangle(canvas_width + wall_thickness / 2, canvas_height / 2, wall_thickness, canvas_height, { restitution: 0.4, isStatic: true });
    var ceiling = this.matter.add.rectangle(canvas_width / 2, -wall_thickness / 2, canvas_width, wall_thickness, { restitution: 0.4, isStatic: true });

    var agent = this.matter.add.sprite(canvas_width / 2, canvas_height / 2, 50);
    agent.setIgnoreGravity(true);
    this.input.keyboard.on('keydown', (event) => {
        console.log(event.key);
        if(event.key === 'ArrowUp'){
            agent.setVelocityY(-1);
        }
        if(event.key === 'ArrowDown'){
            agent.setVelocityY(1);
        }
        if(event.key === 'ArrowLeft'){
            agent.setVelocityX(-1);
        }
        if(event.key === 'ArrowRight'){
            agent.setVelocityX(1);
        }
        // switch (event.key) { 
        //     case 'ArrowUp': 
        //         agent.setVelocityY(-1);
        //         break; 
        //     case 'ArrowDown': 
        //         agent.setVelocityY(1);
        //         break;
        //     case 'ArrowLeft':
        //         agent.setVelocityX(-1);
        //         break; 
        //     case 'ArrowRight':
        //         agent.setVelocityX(1);
        //         break;
        //     default: 
        //         break; 
        // }
    })
    this.input.keyboard.on('keyup', (event) => {
        switch (event.key) { 
            case 'ArrowUp':  
            case 'ArrowDown': 
            case 'ArrowLeft': 
            case 'ArrowRight':
                agent.setVelocityX(0);
                agent.setVelocityY(0);
                break;
            default: 
                break; 
        }
    })

    // this.input.on('pointerdown', () => {
    //     // console.log(pointer);
    //     const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
    //     this.matter.add.circle(worldPoint.x, worldPoint.y, 10)
    // });
}
