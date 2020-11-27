class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;



    }
    getCount(){
        var playercountRef = database.ref("playercount");
        playercountRef.on("value",function(data){
            playercount = data.val();
        })
    }
    updatecount(count){
        database.ref("/").update({
            playercount:count
        })
}
update(){
    var playerIndex = "players/player"+this.index;

    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
    })

    
}
static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",function(data){
        allPlayer = data.val();

    })
}
}