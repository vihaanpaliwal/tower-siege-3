class greenBox extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
    this.Visibility=255;
  }

  display()
  {
    if(this.body.speed>3)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      var pos=this.body.position;
      rect(this.rect,pos.x,pos.y,this.width,this.height);
      pop();
    }
    else
    {
      fill(0,255,0);
      rectMode(CENTER);
      rect(this.rect,this.body.position.x,this.body.position.y,this.width,this.height);
      super.display();
    }
  }

}
