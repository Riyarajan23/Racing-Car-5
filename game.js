class Game {
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val(); 
        })
    
    }
    update(state)
{
    database.ref('/').update({
        gameState:state
    })
}    
    async start(){
        if(gameState===0){
            player=new Player ()
            var playerCountref=await database.ref('playerCount').once("value")
            if (playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()

                
            }
           
            form=new Form()
            form.display()
        }
car1=createSprite(100,200)
car1.addImage(car1img)
car2=createSprite(300,200)
car2.addImage(car2img)
car3=createSprite(500,200)
car3.addImage(car3img)
car4=createSprite(700,200)
car4.addImage(car4img)
cars=[car1,car2,car3,car4,cars]
    }
    play (){
form.hide();
//text("Game Start",120,100);
Player.getPlayerinfo();
if (allPlayers !==undefined){
    background("black")
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    //var displayPosition=130
var index=0
var x=140
var y

    for (var plr in allPlayers){
        index=index+1
        x=x+200;
y=displayHeight-allPlayers[plr].distance
cars[index-1].x=x
cars[index-1].y=y
        if (index===player.index){
            stroke (10) 
            fill ("red")
            ellipse(x,y,60,60)
            cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
       
       textAlign(CENTER)
       textSize(20)
        text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75)

    }
}
if (keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update();
}


if (player.distance>3550){
    gameState=2
}









drawSprites ()
    }
    end(){
        console.log("Game Ended")
    }
}