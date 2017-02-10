function a(){
	document.getElementById("side").style.display='block';
}
function b(){
	document.getElementById("side").style.display='none';
}

function c(){
	document.getElementById("tizi").style.display='none';
	document.getElementById("tiza").style.display='block';
}
function d(){
	document.getElementById("chatdiv").style.display='none';
	document.getElementById("tiza").style.display='none';
	document.getElementById("tizi").style.display='block';
}
 var element = document.getElementById('tizi'),
				x = 0, y = 0;

			interact(element)
			  .draggable({
				snap: {
				  
				  range: Infinity,
				  relativePoints: [ { x: 0, y: 0 } ]
				},
				inertia: true,
				restrict: {
				  restriction: element.parentNode,
				  elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
				  endOnly: true
				}
			  })
			  .on('dragmove', function (event) {
				x += event.dx;
				y += event.dy;

				event.target.style.webkitTransform =
				event.target.style.transform =
					'translate(' + x + 'px, ' + y + 'px)';
			  });