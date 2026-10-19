# Blue — scroll-driven film

A browser-based reconstruction of the two supplied Alight Motion project files. The original `Blue - Step 1` XML provides the square 1080 × 1080 composition, 30 fps timeline, source artwork, lyric text, and scene timing. Scrolling through the film advances or reverses that timeline; the supplied overlay video is sought to the two intervals specified by `Blue - Step 2`.

## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. To make and preview a production build:

```powershell
npm run build
npm run preview
```

The browser application and animation dependencies are bundled locally. Original XML files and supplied media stay in place; the production build includes the image and video files it uses.

## Fidelity notes

The source projects refer to files not present in the workspace: the original rendered `Blue - Step 1` video, the music and camera-sound audio, `image-from-rawpixel-id-14711492-png.png`, `image-from-rawpixel-id-9347315-png.png`, `image-from-rawpixel-id-6536072-png.png`, `image-from-rawpixel-id-9805687-png.png`, and the source-project fonts `BabyDoll.ttf` and `FromWhereYouAre.ttf`. The later empty image reference also has no filename. No substitutes are supplied for these missing files. The supplied 640 × 352 MP4 is used only for the two screen-blended intervals in the second XML.

Scene times and available artwork are taken from the XML. The unavailable rendered base video, audio, source fonts, nested Alight Motion masks/effects, and original layer transforms cannot be reproduced exactly here; lyric typography, image layout, transitions, and those effects are browser approximations. The project XML and supplied assets are preserved unchanged.
