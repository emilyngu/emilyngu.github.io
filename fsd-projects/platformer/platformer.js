$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290, "white");
createPlatform(1350, 400, 50, 50, "white");
createPlatform(900, 450, 200, 100, "white");
createPlatform(250, 450, 100, 150, "white");
createPlatform(750, 190, 250, 50, "white");
createPlatform(550, 675, 300, 50, "white")
createPlatform(1100, 325, 100, 40, "white")
createPlatform( 475, 540, 250, 50, "white")
createPlatform(100, 325, 200, 40, "white")
createPlatform(375, 200, 50, 50, "white")
createPlatform(520, 100, 75, 30, "white")
createPlatform(100, 180, 20, 200, "white")

    // TODO 3 - Create Collectables
createCollectable("database", 380, 160)
createCollectable("database", 1350, 360)
createCollectable("database", 550, 60)


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 395);
createCannon("right", 350, 1300);
createCannon ("right", 580, 1400);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
