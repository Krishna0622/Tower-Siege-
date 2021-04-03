class Box1{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.3,
            //isStatic:true
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
     
score(){
  if(this.visibility<0 && this.visibility>-105){
    score=score+1;
  }
  }

      display(){
        console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        
        pop();
        
      }
      box1.score();
      box2.score();
      box3.score();
      box4.score();
      box5.score();   
      box6.score();
      box7.score();
      box8.score();
      box9.score();
      box10.score();
      box11.score();
      box12.score();
      box13.score();
      box14.score();
      box15.score();
      box16.score();
      box17.score();
      box18.score();
      box19.score();
      box20.score();
      box21.score();
      box22.score();
      box23.score();
      box24.score();
      box25.score();
      box26.score();
      box27.score();
      box28.score();
      box29.score();
      box30.score();
      box31.score();
      box32.score();
      box33.score();
      box34.score();
      box35.score();
      box36.score();
      box37.score();
      box38.score();
      box39.score();
      box40.score();
      box41.score();
      box42.score();
      
     
    }
    
    };
