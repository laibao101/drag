
function(id){
	var obj = document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		var ev = ev || event;
		disX=ev.clientX;
		disY=ev.clientY;
		obj.onmousemove=function(){
			
		}
		obj.onnmouseup=function(){
			obj.onmousemove=null;
		}
	}
	
}