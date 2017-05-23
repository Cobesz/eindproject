/// <reference path="gameObject.ts" />


class Tank2 extends gameObject {

    private speed:number;
    //private div:HTMLElement;
    private directionX: number = 0;
    private directionY: number = 0;
    
    
    public size: number = 20;
    
            
    constructor() {
        super("tank2");
        
        this.directionX = 0;
        this.directionY = 0;
        
        

        this.speed = 4;
        this.x = 500;
        this.y = 400;

        

        
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
        
    }
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            
            case 65: //RIGHT
                
                break;
                
            case 83: //RIGHT
                this.directionY = 1;
                break;
            case 87: //RIGHT
                this.directionY = -1;
                break;
            
            case 68: //LEFT
                
                break;
        }
        
    }
     private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
           
            case 65: //RIGHT
                this.directionX = 0;
                break;
                
            case 83: //RIGHT
                this.directionY = 0;
                break;
            case 87: //RIGHT
                this.directionY = 0;
                break;
          
            case 68: //LEFT
                this.directionX = 0;
                break;
        }
    }
   
    public move() : void {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        
    }
}