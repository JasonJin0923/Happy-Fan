     function setCookie(keyName,keyVal,expDateNum,path){
			  var d= new Date();
				d.setDate(d.getDate()+expDateNum);
		    document.cookie= keyName+"="+keyVal+";expires="
				        +d+";path="+path;
				//console.log("cookie is ok ");
		 }
		 function getCookie(keyName){
		   var val="";
		   var cookies = document.cookie;
			
			 //对所有的cookie进行切片，以;+空格 为分隔符
			 var arr = cookies.split("; ");
			  
			 for(var i=0;i<arr.length;i++){
				 var key = arr[i].split("=")[0];
				 
				 if(key==keyName){
           val=arr[i].split("=")[1];
					 break;
				 }
				 
			 }
		   return val;
		 }
		 function removeCookie(keyName){
		    //删除cookie ：keyName
				var d= new Date(0);
				//var val = getCookie(keyName);
				//path=/ ? 
				document.cookie= keyName+"=0;expires="+d;
				//document.cookie= "party=abc;expires="+d;
				console.log(keyName+ " is already deleted");
		 }