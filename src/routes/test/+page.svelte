<script lang="ts">
	import { onMount } from "svelte";
    import { mat4 } from "gl-matrix";

    // Vertex shader program
    const vsSource = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        }
    `;

    let startTime: number;
    let animationId: number;

    // Function to load shader from static file
    const loadShaderFile = async (url: string): Promise<string> => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load shader: ${response.statusText}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error loading shader file:', error);
            throw error;
        }
    };

    //
    // creates a shader of the given type, uploads the source and
    // compiles it.
    //
    const loadShader = (gl: WebGLRenderingContext, type: number, source: string) => {
        const shader = gl.createShader(type);

        if (!shader) {
            alert("Unable to create shader");
            return;
        }

        // Send the source to the shader object
        gl.shaderSource(shader, source);

        // Compile the shader program
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(
                `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
            );
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    //
    // Initialize a shader program, so WebGL knows how to draw our data
    //
    const initShaderProgram = (gl: WebGLRenderingContext, vsSource: string, fsSource: string) => {
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        if (!vertexShader || !fragmentShader) {
            alert("Unable to create vertex or fragment shaders");
            return;
        }

        // Create the shader program
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                shaderProgram,
            )}`,
            );
            return null;
        }

        return shaderProgram;
    }


    const initPositionBuffer = (gl: WebGLRenderingContext) => {
        // Create a buffer for the square's positions.
        const positionBuffer = gl.createBuffer();

        // Select the positionBuffer as the one to apply buffer
        // operations to from here out.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Now create an array of positions for the square.
        const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

        // Now pass the list of positions into WebGL to build the
        // shape. We do this by creating a Float32Array from the
        // JavaScript array, then use it to fill the current buffer.
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        return positionBuffer;
    }
    
    type PositionBuffer = {
        position: WebGLBuffer
    }

    type ProgramInfo = {
        program: WebGLProgram;
        attribLocations: {
            vertexPosition: number;
        };
        uniformLocations: {
            projectionMatrix: WebGLUniformLocation | null;
            modelViewMatrix: WebGLUniformLocation | null;
            time: WebGLUniformLocation | null;
        };
    }
    
    const initBuffers = (gl: WebGLRenderingContext) => {
        const positionBuffer = initPositionBuffer(gl);

        return {
            position: positionBuffer,
        };
    }

    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute.
    const setPositionAttribute = (gl: WebGLRenderingContext, buffers: PositionBuffer, programInfo: ProgramInfo) => {
        const numComponents = 2; // pull out 2 values per iteration
        const type = gl.FLOAT; // the data in the buffer is 32bit floats
        const normalize = false; // don't normalize
        const stride = 0; // how many bytes to get from one set of values to the next
        // 0 = use type and numComponents above
        const offset = 0; // how many bytes inside the buffer to start from
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            numComponents,
            type,
            normalize,
            stride,
            offset,
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }

    const drawScene = (gl: WebGLRenderingContext, buffers: PositionBuffer, programInfo: ProgramInfo, currentTime: number) => {
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
        gl.clearDepth(1.0); // Clear everything
        gl.enable(gl.DEPTH_TEST); // Enable depth testing
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things

        // Clear the canvas before we start drawing on it.

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Create a perspective matrix, a special matrix that is
        // used to simulate the distortion of perspective in a camera.
        // Our field of view is 45 degrees, with a width/height
        // ratio that matches the display size of the canvas
        // and we only want to see objects between 0.1 units
        // and 100 units away from the camera.

        const fieldOfView = (45 * Math.PI) / 180; // in radians
        const canvas = gl.canvas as HTMLCanvasElement
        const aspect = canvas.clientWidth / canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        // note: glMatrix always has the first argument
        // as the destination to receive the result.
        mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

        // Set the drawing position to the "identity" point, which is
        // the center of the scene.
        const modelViewMatrix = mat4.create();

        // Now move the drawing position a bit to where we want to
        // start drawing the square.
        mat4.translate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to translate
            [-0.0, 0.0, -6.0],
        ); // amount to translate

        // Tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute.
        setPositionAttribute(gl, buffers, programInfo);

        // Tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // Set the shader uniforms
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix,
        );
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.modelViewMatrix,
            false,
            modelViewMatrix,
        );

        const timeInSeconds = (currentTime - startTime) * 0.001; //Convert to seconds
        gl.uniform1f(programInfo.uniformLocations.time, timeInSeconds);

        {
            const offset = 0;
            const vertexCount = 4;
            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
        }
    }

    const render = (gl: WebGLRenderingContext, buffers: PositionBuffer, programInfo: ProgramInfo) => {
        const renderLoop = (currentTime: number) => {
            drawScene(gl, buffers, programInfo, currentTime);
            animationId = requestAnimationFrame(renderLoop);
        }

        startTime = performance.now();
        renderLoop(startTime);
    }

    // Add this function to handle high-DPI displays
    const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        const pixelRatio = window.devicePixelRatio || 1;
        
        const width = Math.floor(displayWidth * pixelRatio);
        const height = Math.floor(displayHeight * pixelRatio);
        
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            
            // Update the viewport
            const gl = canvas.getContext('webgl');
            gl?.viewport(0, 0, width, height);
        }
    }

    const main = async () => {
        try {
            const fsSource = await loadShaderFile('/shaders/test.frag');

            const canvas = <HTMLCanvasElement> document.querySelector("#gl-canvas");
            
            resizeCanvasToDisplaySize(canvas);
            
            // Initialize the GL context
            const gl = canvas?.getContext("webgl");

            // Only continue if WebGL is available and working
            if (gl === null) {
                alert(
                "Unable to initialize WebGL. Your browser or machine may not support it.",
                );
                return;
            }

            const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

            if (!shaderProgram) {
                alert('Unable to create shaderProgram');
                return;
            }

            // Collect all the info needed to use the shader program.
            // Look up which attribute our shader program is using
            // for aVertexPosition and look up uniform locations.
            const programInfo = {
                program: shaderProgram,
                attribLocations: {
                    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
                },
                uniformLocations: {
                    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
                    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
                    time: gl.getUniformLocation(shaderProgram, "uTime"),
                },
            };

            const buffers = initBuffers(gl);
            
            render(gl, buffers, programInfo);
        } catch (error) {
            console.log('Failed to initialize WebGL application:', error);
            alert('Failed to load shader files, check console for details');
        }
    }

    onMount(() => {
        main();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    });

</script>

<main>
    <canvas id='gl-canvas'></canvas>
</main>

<style>
    main {
        height: calc(100vh - var(--size-9));
        overflow: hidden;
    }

    canvas {
        width: 100%;
        height: 100%;
    }
</style>