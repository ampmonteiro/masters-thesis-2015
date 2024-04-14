//function showText(ctx){
//
//	ctx.font = "40pt Calibri";
//    ctx.fillText("My TEXT!", 20, 60);
//
//}




TextInsert = function (canvas, context) {

	this.canvas = canvas,
	this.context = context;
	var fontSelect = document.getElementById('fontSelect'),
		sizeSelect = document.getElementById('sizeSelect'),
		strokeStyleSelect = document.getElementById('strokeStyleSelect'),
		fillStyleSelect = document.getElementById('fillStyleSelect'),
		cursor = new TextCursor(),
		line,
		blinkingInterval,
		BLINK_TIME = 2000,
		BLINK_OFF = 100;


	function windowToCanvas(x, y) {
		var bbox = canvas.getBoundingClientRect();
		return {
			x: x - bbox.left * (canvas.width / bbox.width),
			y: y - bbox.top * (canvas.height / bbox.height)
		};
	}

	// Drawing surface...............................................

	function saveDrawingSurface() {
		//context.translate(canvas.width / 2, canvas.height / 2);
		drawingSurfaceImageData = context.getImageData(0,0,
			canvas.width,
			canvas.height);
	}

	// Text..........................................................

	function setFont() {
		context.font = sizeSelect.value + 'px ' + fontSelect.value;
	}

	function blinkCursor(x, y) {
		clearInterval(blinkingInterval);
		blinkingInterval = setInterval(function (e) {
			cursor.erase(context, drawingSurfaceImageData);

			setTimeout(function (e) {
				if (cursor.left == x &&
					cursor.top + cursor.getHeight(context) == y) {
					cursor.draw(context, x, y);
				}
			}, 300);
		}, 1000);
	}

	function moveCursor(x, y) {
		cursor.erase(context, drawingSurfaceImageData);
		saveDrawingSurface();
		context.putImageData(drawingSurfaceImageData, 0, 0);

		cursor.draw(context, x-canvas.width/2, y-canvas.height/2);
		blinkCursor(x-canvas.width/2, y-canvas.height/2);
	}

	// Event handlers................................................

	//canvas.onmousedown = function (e) {

	canvas.ondblclick = function (e) {
		var loc = windowToCanvas(e.clientX, e.clientY),
			fontHeight = context.measureText('W').width;

		fontHeight += fontHeight / 6;
		line = new TextLine(loc.x, loc.y);
		moveCursor(loc.x, loc.y);
	};

	fillStyleSelect.onchange = function (e) {
		cursor.fillStyle = fillStyleSelect.value;
		context.fillStyle = fillStyleSelect.value;
	}

	// strokeStyleSelect.onchange = function (e) {
	// 	cursor.strokeStyle = strokeStyleSelect.value;
	// 	context.strokeStyle = strokeStyleSelect.value;
	//}

	// Key event handlers............................................

	document.onkeydown = function (e) {
		if (e.keyCode === 8 || e.keyCode === 13) {
			// The call to e.preventDefault() suppresses
			// the browser's subsequent call to document.onkeypress(),
			// so only suppress that call for backspace and enter.
			e.preventDefault();
		}

		if (e.keyCode === 8) { // backspace
			context.save();

			line.erase(context, drawingSurfaceImageData);
			line.removeCharacterBeforeCaret();

			moveCursor(line.left + line.getWidth(context),
				line.bottom);

			line.draw(context);

			context.restore();
		}
	}

	document.onkeypress = function (e) {
		var key = String.fromCharCode(e.which);

		if (e.keyCode !== 8 && !e.ctrlKey && !e.metaKey) {
			e.preventDefault(); // no further browser processing

			context.save();

			line.erase(context, drawingSurfaceImageData);
			line.insert(key);

			moveCursor(line.left + line.getWidth(context),
				line.bottom);

			context.shadowColor = 'rgba(0, 0, 0, 0.5)';
			context.shadowOffsetX = 0;
			context.shadowOffsetY = 0;
			context.shadowBlur = 1;

			line.draw(context);

			context.restore();
		}
	}

	// Initialization................................................

	fontSelect.onchange = setFont;
	sizeSelect.onchange = setFont;

	cursor.fillStyle = fillStyleSelect.value;
	//cursor.strokeStyle = strokeStyleSelect.value;

	context.fillStyle = fillStyleSelect.value;
	//context.strokeStyle = strokeStyleSelect.value;

	context.lineWidth = 1.0;

	setFont();

	saveDrawingSurface();
}