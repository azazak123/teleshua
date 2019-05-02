function Model(){
   this.score=0;
   this.swin=5;
   this.mArt=[];
   this.mSource=[];
   this.x;
   this.y;
   this.hod=1;
   for(let i=0;i<8;i++){
      this.mArt[i]=[];
      this.mSource[i]=[];
      for(let j=0;j<9;j++){
         this.mArt[i][j]=" ";
         this.mSource[i][j]=" ";
      }
   }
}
function Controller(){
   var x;
   var y;
   var n;
   this.zapoln=function(model){
      var simv="@#$%^";
      for(let i=0;i<5;i++){
         n=0;
         while(n<=i){
            x=(Math.random()*8)^0;
            y=(Math.random()*9)^0;
            if(model.mArt[x][y]==" "){
               model.mArt[x][y]=simv[i];
               n++;
            }
         }
      }
      return model;
   }
   this.proverka=function(model){
      if(model.mArt[model.x][model.y]==" "){
         model.mSource[model.x][model.y]="-";
      }else{
        model.mSource[model.x][model.y]=model.mArt[model.x][model.y];
         switch (model.mSource[model.x][model.y]){
            case "@":
            model.score+=5;
            break;
            case "#":
            model.score+=4;
            break;
            case "$":
            model.score+=3;
            break;
            case "%":
            model.score+=2;
            break;
            case "^":
            model.score+=1;
            break;
         }
      }
      model.x=null;
      model.y=null;
      return model;
   }
}
function View(){
   this.print=function(model){
      var stroka="<pre> 1 2 3 4 5 6 7 8 9 |  1 2 3 4 5 6 7 8 9<p></p>";
      for(let i=0;i<8;i++){
         stroka=stroka+(+i+1);
         for(let j=0;j<9;j++){
            stroka=stroka+model.mArt[i][j]+" ";
         }
         stroka=stroka+"| "+(+i+1);
         for(let j=0;j<9;j++){
            stroka=stroka+model.mSource[i][j]+" ";
         }
         stroka=stroka+"<p></p>";
      }
      stroka=stroka+"</pre>";
      document.getElementById('qwe').innerHTML=stroka;
   }
}
document.getElementById("in").onchange=function(){
   var xy=document.getElementById("in").value.split(" ");
   if(+xy[0]>9||+xy[1]>8||+xy[0]<1||+xy[1]<1){
      document.getElementById("in").value="Неправильный ввод";
      return;
   }
   if(model.mSource[+xy[1]-1][+xy[0]-1]!=" "){
      document.getElementById("in").value="Было введено ранее";
      return;
   }
   model.y=+xy[0]-1;
   model.x=+xy[1]-1;
   model=controller.proverka(model);
   view.print(model);
   document.getElementById("in").value="";
   model.hod++;
   if(model.score>=model.swin){
      alert("Вы выграли");
      location.reload();
   }
   if(model.hod==12){
      alert("Вы проиграли");
      location.reload();
   }
   document.getElementById("score").innerHTML="Очки:"+model.score+" Ход:"+model.hod;
}
var model=new Model();
var controller=new Controller();
var view=new View();
model=controller.zapoln(model);
view.print(model);
document.getElementById("score").innerHTML="Очки:"+model.score+" Ход:"+model.hod;
  