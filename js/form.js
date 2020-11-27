class Form{
    constructor(){ 
        this.title = createElement("h2")
        this.greeting = createElement("h3");
        this.input = createInput("Name");
        this.button = createButton("play");

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }
    display(){

       this.title.html("car racing game")
        this.title.position(displayWidth/2,0);

       this.input.position(displayWidth/2+200,displayHeight/2-80);
       this.button.position(displayWidth/2+260,displayHeight/2);

       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playercount += 1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);

           
           this.greeting.html("hello " +player.name )
           this.greeting.position(displayWidth/2-70,displayHeight/4);
        })


    }
}