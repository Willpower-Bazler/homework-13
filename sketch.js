//variables

//for green player circle
var x = 250;
var y = 250;
var d = 25;

/* didnt work

var cx = 0;
var cy = 0;
var cd = 0;

*/


//for yellow mouse circle
var mousex = 0;
var mousey = 0;

//arrays
var arrayx = [];
var arrayy = [];
var arrayd = [];

/* didnt work

var arrayxm = [];
var arrayym = [];
var arraydm = [];

*/




//setup
function setup()

{
    createCanvas(500, 500);
    for(var i = 0; i < 1000; i++)
        {
            //get random numbers to make circle
            arrayx[i] = randomx(500);
            arrayy[i] = randomy(500);
            arrayd[i] = randomd(30);
          
          /*
          arrayxm[i] = randomxm(500);
            arrayym[i] = randomym(500);
            arraydm[i] = randomdm(100);
          */
      
        }
 
  
  
  
}


//drawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
function draw()
{
  background(0,0,0);
  
  //ewufewiubfiewjfbiwhebfiewbfiewbgfiwbgiwrbgwrbg
   for(var i = 0; i < arrayy.length; i++)
      {
            fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
            circle(arrayx[i], arrayy[i], arrayd[i]);
        
          /* didnt work
          
        arrayx[i] += randomxm;
     arrayy[i] += randomym;
     if(arrayx[i] >= 550 || arrayy[i] >=550)
     {
       arrayx[i]=-50;
       arrayy[i]=-50;
     }
     */
        
      }
     //creates exit square
  exitsquare()
  //creates exit square message
  exitmessage()
  //creates player
  playercreate()
  //moves player wasd
  playermove()
  //mouseclick creates yellow circle
  mouseclicks()
  
  


  
}



//drawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


//function to create player
function playercreate()
{
  //green circle
      fill(64, 255, 0);
      circle(x, y, d);
}


//function to move player with keyboard
function playermove()
{
      
      //green circle moves wasd
      if (x >= 500 || x <=0) 
      {
        x = 250;
        y = 250;
      }
      if (keyIsDown(83)) 
      {
        y += 5;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 5;
      }
      if (y >= 500 || y <=0) 
      {
        x = 250;
        y = 250;
      }
          if (keyIsDown(68)) 
      {
        x += 5;
      } 
      else if (keyIsDown(65)) 
      {
        x -= 5;
      }
}


//function for clicking mouse makes yellow dot
function mouseclicks()
{
   //mouse makes yellow dot
      fill(255,255,0);
      circle(mousex, mousey, d);
  
}
//function for mouseclick
function mouseClicked()
{
  mousex = mouseX;
      mousey = mouseY;
}





//function for exit square
function exitsquare()
{
     fill(255,128,0);
      square(400,0,100);
      fill(0,0,0);
      text('exit',440,50);
}
//function for exit message
function exitmessage()
{
     if(x >= 400 && y <=100)
      {
        fill(255,255,255);
        text('you win boiii',250,250);
      }
}

//random circle functions

 function randomx(x)
    {
        return Math.floor(Math.random()*x)+10;
    }

    function randomy(y)
    {
        return Math.floor(Math.random()*y) + 10;
    }

 function randomd(d)
    {
        return Math.floor(Math.random()*d) + 10;
    }

/* didnt work

 function randomxm(x)
    {
       return Math.floor(Math.random() * 10) + 1;
    }

    function randomym(y)
    {
       return Math.floor(Math.random() * 10) + 1;
    }

 function randomdm(d)
    {
       return Math.floor(Math.random() * 10) + 1;
    }
    
*/
