import Drawable from "./Drawable.js";

export default class Player extends Drawable {
    x;
    y;
    moving;
	startTime; 
	speedAnim; 
	Direction; 
	DirectioOld; 
    
    constructor(x = 0, y = 0) {
        super();
        this.x = x;
        this.y = y;
		this.startTime = new Date().getTime(); 
		this.speedAnim = 8; 
		this.Direction = 3; 
		this.DirectioOld = this.Direction; 
     }
	
	getTime() {
		return (new Date().getTime() - this.startTime)  /1000;
	}
	
	updateTime() {
		this.startTime = new Date().getTime();
	}

    update() {
        if (this.moving) {
            const diffX = Math.abs(this.x - this.moving.targetX);
            const diffY = Math.abs(this.y - this.moving.targetY);

            if (diffX <= Player.SPEED && diffY <= Player.SPEED) {
                this.x = this.moving.targetX;
                this.y = this.moving.targetY;
                this.moving = null;
            } else {
				
				let xMoving = Player.SPEED * Math.cos(this.moving.angle);
				let yMoving = Player.SPEED * Math.sin(this.moving.angle); 

				if(Math.abs(xMoving) > Math.abs(yMoving)) 
				{
					if(xMoving<0) 
					{
						this.Direction = 1;
						this.DirectioOld = this.Direction; 
					}
					else
					if(xMoving>0) 
					{
						this.Direction = 3;
						this.DirectioOld = this.Direction; 
					}
				}
				else
				{
					if(yMoving<0) 
						this.Direction = 2;
					else
					if(yMoving>0) 
						this.Direction = 4;
				}
				
				
                this.x += xMoving;
                this.y += yMoving;
            }
        }
    }

    draw() {
		
        const sWidth = 2521/18;  
        const sHeight = 198;

		let id = 0;
		
		if(this.moving != null) {
			id = Math.trunc(this.getTime()*this.speedAnim); 
			if(id>8) {
				this.updateTime(); 
				id = 0; 
			}
			
			if(this.Direction == 2 || this.Direction == 4) {
				if(this.DirectioOld == 3)
					id += 9; 
					//else
					//id += 0;
			}
			
			else
			if(this.Direction == 1) { 
				
			}
			else
			if(this.Direction == 3) 
			id+=9; 
		}
		else {
			if(this.DirectioOld == 3) 
			id = 9;
			else 
			id = 8; 
		}	
		
		this.ctx.drawImage(Player.IMAGE, sWidth*id, 0, sWidth, sHeight, this.x - 20, this.y - 35, 100, 100); 
		
    }

    move(targetX, targetY) {
        if (this.moving) return;
        
        const diffX = targetX - this.x;
        const diffY = targetY - this.y;
        const angle = Math.atan2(diffY, diffX);		
        this.moving = { targetX, targetY, angle };
    }
}


const image = new Image(2521, 198); 
image.src = 'images/krtek_pohybFix.png';
Player.IMAGE = image;
Player.SPEED = 10;
Player.js