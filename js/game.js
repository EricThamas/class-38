class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
   async start(){
        if(gameState===0){
            player = new Player();
            var playercountRef = await database.ref("playercount").once("value");
            if(playercountRef.exists()){
                playercount = playercountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        //textSize(16);
        //text("GameStart",200,200);
        Player.getPlayerInfo();

        if(allPlayer!==undefined){
            //var display_position = 130
            //index of the []
            var index = 0
            //x and y positions of the cars
            var x = 0;
            var y;
            for(var i in allPlayer){
                //add 1 to the index of the [] for every loop
                index +=1
                //position of dsitance between each of the cars in the  x direction
                x =x+200;
                //use data from database to display the cars in y direction
                y = displayHeight - allPlayer[i].distance
                cars[index-1].x=x;
                cars[index-1].y=y;

                if (index === player.index){ 
                    cars[index - 1].shapeColor = "red"; 
                camera.position.x = displayWidth/2; 
                camera.position.y = cars[index-1].y
                 }

                if(keyDown("up")&& player.index!==null){
                    player.distance+=10;
                    player.update();

                }
                drawSprites();

                

            }

        }
    }
}