var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'game-container',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
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

function preload (){}

function create ()
{
    var ground = this.matter.add.rectangle(400, 550, 100, 100,{ restitution: 0.4, isStatic: true });

    this.input.on('pointerdown', () =>{
        // console.log(pointer);
        const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
        this.matter.add.circle(worldPoint.x, worldPoint.y, 10)
    });
}
