export function initLuxuryShader(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null
  if (!gl) return

  function syncSize() {
    const w = canvas.clientWidth || 1280
    const h = canvas.clientHeight || 720
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
    }
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(syncSize).observe(canvas)
  }
  syncSize()

  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

  const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x *= u_resolution.x / u_resolution.y;
    float t = u_time * 0.15;
    vec2 p = uv * 3.0;
    for(int i=1; i<5; i++){
        float fi = float(i);
        p.x += 0.5 / fi * sin(fi * p.y + t + fi * 0.6) + 0.5;
        p.y += 0.5 / fi * sin(fi * p.x + t + fi * 0.3) + 0.5;
    }
    float color = 0.5 + 0.5 * sin(p.x + p.y);
    vec3 charcoal = vec3(0.04, 0.04, 0.04);
    vec3 highlight = vec3(0.12, 0.12, 0.13);
    vec3 goldTint = vec3(0.06, 0.05, 0.04);
    vec3 finalColor = mix(charcoal, highlight, color);
    finalColor = mix(finalColor, goldTint, 0.1 * sin(u_time * 0.1));
    gl_FragColor = vec4(finalColor, 1.0);
}`

  const _gl = gl
  function createShader(type: number, src: string) {
    const s = _gl.createShader(type)
    if (!s) return null
    _gl.shaderSource(s, src)
    _gl.compileShader(s)
    return s
  }

  const prog = gl.createProgram()
  if (!prog) return

  const vsShader = createShader(gl.VERTEX_SHADER, vs)
  const fsShader = createShader(gl.FRAGMENT_SHADER, fs)
  if (!vsShader || !fsShader) return

  gl.attachShader(prog, vsShader)
  gl.attachShader(prog, fsShader)
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

  const pos = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uRes = gl.getUniformLocation(prog, 'u_resolution')

  function render(t: number) {
    if (typeof ResizeObserver === 'undefined') syncSize()
    _gl.viewport(0, 0, canvas.width, canvas.height)
    if (uTime) _gl.uniform1f(uTime, t * 0.001)
    if (uRes) _gl.uniform2f(uRes, canvas.width, canvas.height)
    _gl.drawArrays(_gl.TRIANGLE_STRIP, 0, 4)
    requestAnimationFrame(render)
  }
  render(0)
}
