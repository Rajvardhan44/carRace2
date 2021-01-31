class Form{
    constructor(){
        this.inp = createInput("Name")
        this.button = createButton("PLAY")
        this.Greeting = createElement("h2")
        this.reset = createButton("RESET") 

    }
    hide(){
        this.Greeting.hide()
        this.inp.hide()
        this.button.hide()
        
    }
    display(){
        var title = createElement("h1")
        title.html(" Car Race ")

        title.position(displayWidth/2,0)
        this.inp.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2 + 70,displayHeight/2 + 30)
        this.reset.position(displayWidth-70,10)
        this.button.mousePressed(()=>{
        this.inp.hide()
        this. button.hide()
            player.name = this.inp.value()
            playerCount += 1
            player.index = playerCount                                                                                                      
            player.update()
            player.updateCount(playerCount)
            this.Greeting.html("Hello "+ player.name)
            this.Greeting.position(100,100)
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0)
            carAtEnd.updateCount(0)
        })
    }
    
}