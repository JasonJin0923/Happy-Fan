
function move(obj,json,fn){
	if(obj.timer){
		clearInterval(obj.timer);
	}
	obj.timer=setInterval(function(){
		for(var attr in json){
			
			 if( attr =='opacity'){ 
	              var iCur = parseInt(getStyle(obj,attr)*100);
				  var speed = (json.opacity - iCur)/8 ;
				  speed>0?speed=Math.ceil(speed):speed=Math.floor(speed); 	 
				 if(iCur ==json.opacity){  
					 clearInterval(obj.timer);
					 if(fn){fn()}  ;
					 } 
				  else{ document.title=iCur;
				      obj.style.opacity = (iCur + speed)/100; 
					obj.style.filter = 'alpha(opacity:iCur)'}; 	 
				 }   ///透明度改变
				    
		 else{ 
	     var iCur = parseInt(getStyle(obj,attr)) ;  
	     var dis = parseInt(json[attr]) - iCur;  
		 var speed = dis/8;
		 speed = speed>0?Math.ceil(speed):Math.floor(speed);
		 if( iCur!=parseInt(json[attr]) ){
		     obj.style[attr] = parseInt(getStyle(obj,attr)) + speed + 'px';}
          else{
			 clearInterval(obj.timer) 
			 if(fn){ fn() }   };  
		  }  ///非透明度改变
		 }
			 },30) 
		 
  
	}//运动库
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