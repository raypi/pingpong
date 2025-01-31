class Ball extends Drawable {

    // ########### Attributes ###########
    x = 450;
    y = 300;
    w = 5;
    h = 5;
    spdX = 2;
    spdY = .5;
    ponged = false;
    fieldheight

    // ########### Constructor ###########
    constructor(fldwdth, fldhght){
        super();
        this.fieldheight = fldhght;
        this.x = fldwdth / 2;
        this.y = fldhght / 2
        this.animate();
    }
    
    // ########### Methods ###########
    //this.ball.isColliding(this.player1)
    // \o/ hier kann deine Kollisionsabfrage stehen. \o/
    isColliding(player) {
        return this.x + this.w > player.x &&
        this.y + this.h > player.y &&
        this.x < player.x + player.w &&
        this.y < player.y + player.h        
    }
        
    
//     if (charachter.x + charachter.width > chicken.x &&
//    charachter.y +charachter.height > chicken.y &&
//    charachter.x < chicken.x &&
//    charachter.y < chicken.y + chicken.height
// )

    changeDirection(){
        if(!this.ponged){
            this.spdX *= -1.05;
        }
    }

    animate() {
        setInterval(() => {
            this.x += this.spdX;
            this.y += this.spdY;

            if(this.y >= this.fieldheight - this.h || this.y <= 0){
                this.spdY = this.spdY* -1;
            }
        }, 1000 / 30);
    }
}