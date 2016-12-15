/*
initialise resolution from canvas's size,
=> maybe stick everything into custom tokens on the canvas
= neat, and no js in index.html

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL

right way to queue next frame, call window.requestAnimationFrame(draw) at the end of draw.
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame - it's a proper implementation of an old less proper way that I used before!
*/

// based on code from: https://sites.google.com/site/progyumming/javascript/shortest-webgl

function shaderProgram(gl, vsSourceText, fsSourceText)
{
	var prog = gl.createProgram();
	var addshader = function(type, source)
	{
		var s = gl.createShader((type == 'vertex') ?
			gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
		gl.shaderSource(s, source);
		gl.compileShader(s);
		if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
		{
			throw "Could not compile "+type+
				" shader:\n\n"+gl.getShaderInfoLog(s);
		}
		gl.attachShader(prog, s);
	};
	addshader('vertex', vsSourceText);
	addshader('fragment', fsSourceText);
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
	{
		throw "Could not link the shader program!";
	}
	return prog;
}


