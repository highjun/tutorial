const canvas_width = 400;
const canvas_height = window.innerHeight - 50;
const wall_thickness = 50;

const block_size = 38;
const tetris = {
     // ---
     // -
     0: {
          'x': 0,
          'y': block_size,
          'points': '0 0 ' +
               block_size * 3 + ' 0 ' +
               block_size * 3 + ' ' + block_size + ' ' +
               block_size + ' ' + block_size + ' ' +
               block_size + ' ' + block_size * 2 + ' ' +
               '0 ' + block_size * 2
     },
     // ---
     //   -
     1: {
          'x': 0,
          'y': block_size,
          'points': '0 0 ' +
               block_size * 3 + ' 0 ' +
               block_size * 3 + ' ' + block_size * 2 + ' ' +
               block_size * 2 + ' ' + block_size * 2 + ' ' +
               block_size * 2 + ' ' + block_size + ' ' +
               '0 ' + block_size
     },
     // --
     //  --
     2: {
          'x': 0,
          'y': block_size + 10,
          'points': '0 0 ' +
               block_size * 2 + ' 0 ' +
               block_size * 2 + ' ' + block_size + ' ' +
               block_size * 3 + ' ' + block_size + ' ' +
               block_size * 3 + ' ' + block_size * 2 + ' ' +
               block_size + ' ' + block_size * 2 + ' ' +
               block_size + ' ' + block_size + ' ' +
               '0 ' + block_size
     },
     //  --
     // --
     3: {
          'x': 0,
          'y': block_size + 10,
          'points':
               block_size + ' 0 ' +
               block_size * 3 + ' ' + 0 + ' ' +
               block_size * 3 + ' ' + block_size + ' ' +
               block_size * 2 + ' ' + block_size + ' ' +
               block_size * 2 + ' ' + block_size * 2 + ' ' +
               0 + ' ' + block_size * 2 + ' ' +
               0 + ' ' + block_size + ' ' +
               block_size + ' ' + block_size
     },
     // --
     // --
     4: {
          'x': 0,
          'y': block_size + 10,
          'points':
               '0 0 ' +
               block_size * 2 + ' 0 ' +
               block_size * 2 + ' ' + block_size * 2 + ' ' +
               0 + ' ' + block_size * 2
     },
     // ----
     5: {
          'x': 0,
          'y': block_size / 2 + 10,
          'points':
               '0 0 ' +
               block_size * 4 + ' 0 ' +
               block_size * 4 + ' ' + block_size + ' ' +
               0 + ' ' + block_size
     },
     // ---
     //  -
     6: {
          'x': 0,
          'y': block_size + 10,
          'points':
               0 + ' 0 ' +
               block_size * 3 + ' ' + 0 + ' ' +
               block_size * 3 + ' ' + block_size + ' ' +
               block_size * 2 + ' ' + block_size + ' ' +
               block_size * 2 + ' ' + block_size * 2 + ' ' +
               block_size + ' ' + block_size * 2 + ' ' +
               block_size + ' ' + block_size + ' ' +
               0 + ' ' + block_size
     },
}
     

function createWorld(physics) {
     var ground = physics.matter.add.rectangle(canvas_width / 2, canvas_height + wall_thickness / 2, canvas_width, wall_thickness, { label: 'ground', restitution: 0.4, isStatic: true });
     var left_wall = physics.matter.add.rectangle(-wall_thickness / 2, canvas_height / 2, wall_thickness, canvas_height, { label: 'left', restitution: 0.4, isStatic: true });
     var right_wall = physics.matter.add.rectangle(canvas_width + wall_thickness / 2, canvas_height / 2, wall_thickness, canvas_height, { label: 'right', restitution: 0.4, isStatic: true });
     var ceiling = physics.matter.add.rectangle(canvas_width / 2, -wall_thickness / 2, canvas_width, wall_thickness, { label: 'ceil', restitution: 0.4, isStatic: true });
}

function createNewBlock(physics) {
     var idx = getRandomInt(0, 7);
     var agent = physics.add.polygon(canvas_width / 2 + tetris[idx]['x'], tetris[idx]['y'], tetris[idx]['points'], 0xffffff);
     // var agent = physics.matter.add.fromVertices(canvas_width / 2 + tetris[idx]['x'], tetris[idx]['y'], tetris[idx]['points'], { shape: { type: 'fromVerts', verts: tetris[idx]['points'], flagInternal: true }, label: 'block' });
     physics.matter.add.gameObject(agent, { shape: { type: 'fromVerts', verts: tetris[idx]['points'], flagInternal: true }, label: 'block' });
     agent.setVelocityY(1);
     agent.setFriction(0);
     agent.setFrictionAir(0);
     agent.setState('active');
     agent.setIgnoreGravity(true);
     return agent;
}

function calcArea(physics) {
     var toBeSliced = [];
     var toBeCreated = [];
     let bodies = physics.matter.world.localWorld.bodies;
     for (let i = 0; i < bodies.length; i++) {
          let vertices = bodies[i].parts[0].vertices;
          let pointsArray = [];
          vertices.forEach(function (vertex) {
               pointsArray.push(vertex.x, vertex.y);
          });
          let slicedPolygons = PolyK.Slice(pointsArray, 0, canvas_height-block_size, canvas_width, canvas_height-block_size);
          if (slicedPolygons.length > 1) {
               toBeSliced.push(bodies[i]);
               slicedPolygons.forEach(function (points) {
                    toBeCreated.push(points)
               })

          }
     }
     toBeSliced.forEach(function (body) {
          physics.matter.world.remove(body)
     });
     toBeCreated.forEach(function (points) {
          let polyObject = [];
          for (let i = 0; i < points.length / 2; i++) {
               polyObject.push({
                    x: points[i * 2],
                    y: points[i * 2 + 1]
               })
          }
          let sliceCentre = Phaser.Physics.Matter.Matter.Vertices.centre(polyObject)
          let slicedBody = physics.matter.add.fromVertices(sliceCentre.x, sliceCentre.y, polyObject, {isStatic : false});
          // let slicedBody = physics.add.polygon(sliceCentre.x, sliceCentre.y, tetris[0]['points'], 0xffffff);

     });
}