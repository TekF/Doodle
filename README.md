# Doodle

[Run](http://TekF.github.io/Doodle)

---

## Todo

proj structure:
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

But what about rendering generated meshes?
