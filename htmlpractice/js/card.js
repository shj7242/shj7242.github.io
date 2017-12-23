var deck = new Array();
var classRoof = new Array();
var score = 0

window.onload = function(){


    for(var i =1; i < 14; i++ ){
      deck[i-1] = 'img/'+i +"S.jpg";
    }
    for(var i =1; i< 14; i++){
      deck[i+12] = 'img/'+i +'D.jpg';
    }
    for(var i =1; i<14; i++){
      deck[i+25] = 'img/'+i +'H.jpg';
    }
    for(var i =1; i<14; i++){
      deck[i+38] = 'img/'+i +'C.jpg';
    }
    for(var i =0; i < deck.length; i++){
      classRoof[i]= i
    }
    var ccard = document.getElementsByClassName('card');

  for(var i =0; i < 52; i ++){
  var img = document.createElement('img'); // img 태그 생성 하여 img 변수에 넣는다. 
  document.getElementById('main').appendChild(img); // img 태그를 생성하여 body 의 child로 연결
   img.src = deck[i] // img 의 src 지정
   img.name = true;
   img.width = 50; 
   img.height = 100;
   img.id = i;
   img.className =classRoof[i]%13;
   img.style.visibility ='visible';
   img.alt='';
   }


  
}

function shuffle(){
  var arr = deck;
  var temp = 0;

  var arr2 = classRoof;
  var temp2 = 0;
          for(var i =0; i<deck.length; i ++){
            var random = Math.ceil(Math.random()*52)-1;

            temp = arr[i];
            temp2 = arr2[i];
            // arr[i]=deck[random];
            arr[i] = arr[random];
            arr2[i] = arr2[random];
            arr[random] = temp;
            arr2[random] = temp2;
          }
          deck = arr;
          classRoof = arr2;
          for(var i =0; i <deck.length; i++){
            
            document.getElementById(i).src = deck[i];
            document.getElementById(i).className =classRoof[i]%13+1;
          }
        }
        
        
        
        function pick(){
          
  
}

function click1(){
      for(var i=0; i<deck.length; i++){
        var icard = document.getElementById(i)
        var name = icard.getAttribute('name')

        if(name == 'true'){
          icard.setAttribute('alt' , deck[i]);

          icard.setAttribute('name' , 'false');
          icard.setAttribute('src', 'img/back.jpg')
          
          var firstCheck;
          var secondCheck;
          var count = 1;
          var firstE;
          var firstI;
          icard.onclick = function check() {
            var changeImg = this.alt;

        var mcard = document.getElementById(this.id);
        mcard.setAttribute('src', changeImg);
        if(count==1){
          
          firstCheck = this.className
           firstE = document.getElementById(this.id);
           firstI = firstE.src;
           count+=1;
        }else if(count ==2){
          secondCheck = this.className
            count-=1;
          setTimeout(function(){
            if(firstCheck ==secondCheck){
              mcard.setAttribute('src', changeImg);
              firstE.setAttribute('src' , firstI);
            }else{
              mcard.setAttribute('src', 'img/back.jpg');
              firstE.setAttribute('src', 'img/back.jpg');
            }
          },2000/3)
        }
      };
    }else{
      
      icard.setAttribute('name', 'true');
      icard.setAttribute('src', deck[i]);
    }
  }

}


function click2(){
  for(var i =0; i < deck.length ; i++){
    document.getElementById(i).style.visibility = 'hidden';
  }
}
function click3(){
  for(var i =0; i < deck.length ; i++){
    document.getElementById(i).style.visibility = 'visible';
  }
}

