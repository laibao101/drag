
function drag(id){
	var obj = document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		var ev = ev || event;
		disX=ev.clientX - obj.offsetLeft;
		disY=ev.clientY - obj.offsetTop;
		console.log( disX+',' +disY);
		document.onmousemove=function(ev){
			var ev =ev || event;
			var L=ev.clientX - disX;
			var T=ev.clientY - disY;
			if( L<0){
				L=0;
			}
			else if(L > document.documentElement.offsetWidth - obj.offsetWidth) {
				L = document.documentElement.offsetWidth - obj.offsetWidth;
			}
			if(T<0){
				T=0;
			}
			else if(T>document.documentElement.clientHeight - obj.offsetHeight){
				T=document.documentElement.clientHeight - obj.offsetHeight;
			}
			obj.style.left= L + 'px';
			obj.style.top= T + 'px';
			
			
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
	
}