function startMove(obj,json,fn,num){
    if(obj.timer){
      clearInterval(obj.timer);
	}
	if(!num){
	  num = 8;
	}
	// json: {width:400,height:500}
	obj.timer= setInterval(function(){
	  var bStop = true;
	  for(var attr in json){
	      var target = json[attr];
		  var iCur= getStyle(obj,attr);
		  // console.log(attr+" "+obj.timer);
		  var speed = (target-iCur)/10;
		  speed>0? speed= Math.ceil(speed):speed=Math.floor(speed);
		  
		  // console.log(attr+": "+target+" "+ iCur+ " "+speed);//test
		  
		  if(iCur != target){
		    bStop =false;
			if(attr=="opacity"){
			  obj.style.opacity = (iCur+ speed)/100;
			  obj.style.filter="alpha(opacity:"+(iCur+speed)+")";
			}else{
			  obj.style[attr] = iCur+ speed+"px"
			}
		  }
	  }
	  if(bStop){
	    clearInterval(obj.timer);
			if(fn){
			  fn();
			}
	  }
	},30);
	//console.log(obj.timer);
  }
  
function getStyle(obj,attr){
    var value=0;
	if(obj.curretStyle){
		value= obj.currentStyle[attr];
	}else{
		value= getComputedStyle(obj,false)[attr]
	}
	if(attr=="opacity"){
	  return Math.round(value*100);
	}
	else{
	  return parseInt(value);
	}
  }