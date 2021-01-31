class Player{
    constructor(){
        this.index = null;
        this.distance = 0
        this.name = null;
        this.rank = null;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
        playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+ this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance            

        })
    }
    static getPlayerInfo(){
        var PlayerInfoRef = database.ref("players")
        PlayerInfoRef.on("value",function(data){
            allPlayers = data.val()
        })
    }

    GetcarsEnd(){
        database.ref("carAtEnd").on("value",(data)=>{
            this.rank = data.val()
        })
        
    }

    updateCarsAtEnd(rank){
        database.ref("/").update({
            carAtEnd:rank
        })
                
    }

}