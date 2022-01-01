const dev = true;

var config = {
  type: Phaser.AUTO,
  width: canvas_width,
  height: canvas_height,
  backgroundColor: '#000000',
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
    create: create
  }
};

var game = new Phaser.Game(config);

function create() {
  createWorld(this);
  var agent = createNewBlock(this);
  this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
    if (bodyA.label === 'block' && bodyA.gameObject.state === 'active') {
      if (bodyB.label === 'ground' || (bodyB.label === 'block' && bodyB.gameObject.state === 'remain')) {
        agent = updateAfterCollision(agent, this);
      }
    } else if (bodyB.label === 'block' && bodyB.gameObject.state === 'active') {
      if (bodyA.label === 'ground' || (bodyA.label === 'block' && bodyA.gameObject.state === 'remain')) {
        agent = updateAfterCollision(agent, this);
      }
    }
  });
  this.input.keyboard.on('keydown', (event) => { onkeydown(event, agent); });
  this.input.keyboard.on('keyup', (event) => { onkeyup(event, agent); });
}

function updateAfterCollision(agent, physics) {
  // 각 영역의 크기 계산
  calcArea(physics);
  // 영역의 도형 제거
  agent.setIgnoreGravity(false);
  agent.setState('remain');
  // Make New Block
  return createNewBlock(physics);
}
