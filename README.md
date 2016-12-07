# Doodle

[Run](http://TekF.github.io/Doodle)

---

For offline gif/still rendering of HTML5 things. e.g.:
* monte-carlo path tracing shader for complex/unrestricted scenes
* 3D models
* graphs - using canvas draws
* icons/thumbnails - SVG manipulated in js! (it's all DOM)

These things can then be polished up for interactive realtime use, or just left as gifs.

---

Possible User/Backend approach for ray-marching:

* utils/render.js (calling things in /utils/)
  * web page contents - create all in js
  * frame loop
  * gif encoding
  * status
  * gif output
  * png output
  * [realtime output]
  * general web gl setup
* index.html - just fill a struct of {param:value}s, and call render() (struct => can pass it around and have missing values => back compat/special features)
  * empty web page
  * resolution
  * number of buffers
  * which shader to run on which buffer
  * shader input textures/buffers
  * frame rate
  * number of frames (code should disable gif render if 1 frame, maybe 0 frames = realtime only)
* \<whatever\>.fx
  * shader code

Though this locks us into 1 way of doing things, and probably trips us up later...
However, we could then just call different scripts to switch from shader render -> model -> HTML5 / whatever... hmm...

