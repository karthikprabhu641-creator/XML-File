import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

import opening from '../image-from-rawpixel-id-16515753-jpeg.jpg';
import fallen from '../image-from-rawpixel-id-10967039-jpeg.jpg';
import moonlight from '../image-from-rawpixel-id-9972763-jpeg.jpg';
import moonCutout from '../image-from-rawpixel-id-13807638-png.png';
import nightPortrait from '../image-from-rawpixel-id-12832698-png.png';
import nightSky from '../image-from-rawpixel-id-12929895-png.png';
import moonDetail from '../image-from-rawpixel-id-3822814-png.png';
import interlude from '../01b00fde-5036-4736-90f9-08ff49210881.jpeg';
import theWave from '../image-from-rawpixel-id-2890363-png.png';
import sea from '../Gazing Out to Sea.jpeg';
import face from '../image-from-rawpixel-id-10712054-png.png';
import ocean from '../image-from-rawpixel-id-12946126-png.png';
import leaving from '../image-from-rawpixel-id-9335463-png.png';
import suppliedVideo from '../5_6109510546707450502.mp4';

gsap.registerPlugin(ScrollTrigger);

const DURATION = 30.599;
const scenes = [
  {
    start: 0,
    end: 2.899,
    imageStart: 1.066,
    image: opening,
    imageAlt: 'Opening image from the original Blue project',
    lines: [
      { text: 'I Imagine', font: 'script', start: 0, end: 2.033 },
      { text: 'we fell in', font: 'soft', start: 1.933, end: 2.899 },
    ],
    style: 'opening',
    font: 'soft',
  },
  {
    start: 2.9,
    end: 4.065,
    image: fallen,
    imageAlt: 'Second image from the original Blue project',
    lines: [
      { text: 'we fell in', font: 'soft' },
      { text: 'Love', font: 'script' },
    ],
    style: 'love',
  },
  {
    start: 4.066,
    end: 7.765,
    image: moonlight,
    imageAlt: 'Moonlight scene from the original Blue project',
    layers: [
      { image: moonCutout, alt: '', className: 'moon-cutout' },
      { image: nightPortrait, alt: '', className: 'moon-portrait' },
      { image: nightSky, alt: '', className: 'moon-sky' },
      { image: moonDetail, alt: '', className: 'moon-detail' },
    ],
    lines: [
      { text: 'I’ll nap', font: 'soft', start: 4.066, end: 7.765 },
      { text: 'under', font: 'soft', start: 4.3, end: 7.765 },
      { text: 'with you', font: 'soft', start: 6.033, end: 7.698 },
    ],
    headline: [
      { text: 'MOONLIGHT', start: 5 },
      { text: 'SKY', start: 5.466 },
    ],
    style: 'moonlight',
  },
  {
    start: 7.733,
    end: 8.699,
    image: interlude,
    imageAlt: 'Brief transition image from the original Blue project',
    style: 'interlude',
  },
  {
    start: 8.7,
    end: 10.633,
    image: theWave,
    imageAlt: 'Wave scene from the original Blue project',
    lines: [{ text: 'you with the', font: 'soft', start: 9.667, end: 10.633 }],
    style: 'wave',
    font: 'soft',
  },
  {
    start: 10.6,
    end: 11.533,
    image: sea,
    imageAlt: 'A person gazing out to sea',
    line: 'wave',
    style: 'sea',
    font: 'soft',
  },
  {
    start: 11.466,
    end: 13.232,
    image: face,
    imageAlt: 'Ocean artwork from the original Blue project',
    layers: [{ image: ocean, alt: '', className: 'ocean-detail' }],
    lines: [
      { text: 'the ocean’s', font: 'soft', start: 11.466, end: 13.232 },
      { text: 'Color', font: 'soft', start: 12.2, end: 13.232 },
    ],
    style: 'ocean',
  },
  {
    start: 13.233,
    end: 15.065,
    image: face,
    imageAlt: 'Portrait scene from the original Blue project',
    layers: [{ image: ocean, alt: '', className: 'face-detail' }],
    lines: [
      { text: 'on', font: 'soft', start: 13.233, end: 15.065 },
      { text: 'your', font: 'soft', start: 13.7, end: 15.065 },
      { text: 'face', font: 'soft', start: 14.1, end: 15.065 },
    ],
    style: 'face',
  },
  {
    start: 15.066,
    end: 18.799,
    image: ocean,
    imageAlt: 'Blue ocean scene from the original Blue project',
    layers: [{ image: leaving, alt: '', className: 'leaving-detail' }],
    lines: [
      { text: 'I’ll leave', font: 'soft', start: 15.066, end: 18.799 },
      { text: 'my heart', font: 'soft', start: 15.4, end: 18.799 },
      { text: 'with your air', font: 'soft', start: 16.066, end: 18.799 },
    ],
    style: 'leaving',
  },
  {
    start: 19.533,
    end: 22.366,
    image: opening,
    imageAlt: 'Return to the opening image in the original Blue project',
    lines: [
      { text: 'So let me', font: 'soft', start: 19.533, end: 22.366 },
      { text: 'Fly', font: 'script', start: 20.4, end: 22.366 },
      { text: 'with you', font: 'script', start: 20.9, end: 22.366 },
    ],
    style: 'fly',
    font: 'soft',
  },
  {
    start: 22.466,
    end: 28.032,
    image: moonlight,
    imageAlt: 'Closing moonlight scene from the original Blue project',
    layers: [
      { image: moonCutout, alt: '', className: 'moon-cutout' },
      { image: nightPortrait, alt: '', className: 'moon-portrait' },
      { image: nightSky, alt: '', className: 'moon-sky' },
      { image: moonDetail, alt: '', className: 'moon-detail' },
    ],
    lines: [
      { text: 'Will you', font: 'soft', start: 22.466, end: 28.032 },
      { text: 'be', font: 'soft', start: 23.366, end: 28.032 },
      { text: 'with me', font: 'soft', start: 26.366, end: 28.032 },
    ],
    headline: [{ text: 'Forever', start: 23.866 }],
    style: 'forever',
  },
];

const videoClips = [
  { start: 14, end: 16.965, sourceStart: 13.133 },
  { start: 17.733, end: 20.3, sourceStart: 19.666 },
];

const sceneHost = document.querySelector('#scenes');
const video = document.querySelector('#source-video');
const videoWash = document.querySelector('#video-wash');
const progress = document.querySelector('#progress');
const timecode = document.querySelector('#timecode');
const scrollCue = document.querySelector('#scroll-cue');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderScene(scene, index) {
  const element = document.createElement('article');
  element.className = `scene scene--${scene.style}`;
  element.setAttribute('aria-label', `Scene ${index + 1} of ${scenes.length}`);
  element.setAttribute('aria-hidden', 'true');

  const photo = document.createElement('img');
  photo.className = 'scene-photo';
  photo.src = scene.image;
  photo.alt = scene.imageAlt;
  photo.draggable = false;
  element.append(photo);

  for (const layer of scene.layers ?? []) {
    const image = document.createElement('img');
    image.className = `scene-layer ${layer.className}`;
    image.src = layer.image;
    image.alt = layer.alt;
    image.draggable = false;
    element.append(image);
  }

  if (scene.headline) {
    const headline = document.createElement('p');
    headline.className = 'scene-headline';
    headline.setAttribute('aria-hidden', 'true');
    for (const line of scene.headline) {
      const span = document.createElement('span');
      span.className = 'headline-line';
      span.textContent = typeof line === 'string' ? line : line.text;
      if (typeof line === 'object') span.dataset.start = String(line.start);
      headline.append(span);
    }
    element.append(headline);
  }

  const lyricLines = scene.lines ?? [
    ...(scene.line ? [{ text: scene.line, font: scene.font }] : []),
    ...(scene.secondLine ? [{ text: scene.secondLine, font: 'script' }] : []),
  ];

  if (lyricLines.length) {
    const lyrics = document.createElement('p');
    lyrics.className = 'scene-lyrics';
    lyrics.setAttribute('aria-hidden', 'true');
    for (const lyric of lyricLines) {
      const span = document.createElement('span');
      span.className = `lyric lyric--${lyric.font ?? scene.font ?? 'soft'}`;
      span.textContent = lyric.text;
      if (lyric.start !== undefined) span.dataset.start = String(lyric.start);
      if (lyric.end !== undefined) span.dataset.end = String(lyric.end);
      lyrics.append(span);
    }
    element.append(lyrics);
  }

  sceneHost.append(element);
  return element;
}

const sceneElements = scenes.map(renderScene);
const filmTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.film',
    start: 'top top',
    end: 'bottom bottom',
    scrub: reducedMotion ? 0.15 : 0.6,
    invalidateOnRefresh: true,
  },
  onUpdate: updateReadout,
});

sceneElements.forEach((element, index) => {
  const scene = scenes[index];
  const fadeIn = Math.min(reducedMotion ? 0.16 : 0.42, (scene.end - scene.start) / 3);
  const fadeOut = Math.min(reducedMotion ? 0.16 : 0.38, (scene.end - scene.start) / 3);

  if (scene.imageStart !== undefined) {
    const photo = element.querySelector('.scene-photo');
    gsap.set(photo, { autoAlpha: 0 });
    filmTimeline.fromTo(
      photo,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: reducedMotion ? 0.12 : 0.34, ease: 'power1.out' },
      scene.imageStart,
    );
  }

  if (scene.start === 0) {
    gsap.set(element, { autoAlpha: 1, scale: 1 });
  } else {
    filmTimeline.fromTo(
      element,
      { autoAlpha: 0, scale: reducedMotion ? 1 : 1.025 },
      { autoAlpha: 1, scale: 1, duration: fadeIn, ease: 'power2.out' },
      scene.start,
    );
  }

  for (const line of element.querySelectorAll('.lyric[data-start], .headline-line[data-start]')) {
    const lineStart = Number(line.dataset.start);
    const lineEnd = Number(line.dataset.end ?? scene.end);
    const lineFade = Math.min(reducedMotion ? 0.1 : 0.2, Math.max(0.05, (lineEnd - lineStart) / 3));

    if (lineStart === 0) {
      gsap.set(line, { autoAlpha: 1, y: 0 });
    } else {
      filmTimeline.fromTo(
        line,
        { autoAlpha: 0, y: reducedMotion ? 0 : 5 },
        { autoAlpha: 1, y: 0, duration: reducedMotion ? 0.1 : 0.22, ease: 'power1.out' },
        lineStart,
      );
    }

    if (lineEnd < scene.end) {
      filmTimeline.to(line, { autoAlpha: 0, duration: lineFade, ease: 'none' }, lineEnd - lineFade);
    }
  }

  if (index < sceneElements.length - 1) {
    filmTimeline.to(
      element,
      { autoAlpha: 0, duration: fadeOut, ease: 'power1.inOut' },
      scene.end - fadeOut,
    );
  }
});

for (const clip of videoClips) {
  filmTimeline.fromTo(
    videoWash,
    { autoAlpha: 0 },
    { autoAlpha: 0.88, duration: 0.24, ease: 'none' },
    clip.start,
  );
  filmTimeline.to(videoWash, { autoAlpha: 0, duration: 0.24, ease: 'none' }, clip.end - 0.24);
}

filmTimeline.to({}, { duration: DURATION }, 0);

video.src = suppliedVideo;
video.load();

function updateReadout() {
  const currentTime = filmTimeline.time();
  const seconds = Math.min(DURATION, Math.max(0, currentTime));
  const minute = String(Math.floor(seconds / 60)).padStart(2, '0');
  const second = String(Math.floor(seconds % 60)).padStart(2, '0');
  timecode.firstChild.textContent = `${minute}:${second} `;
  progress.style.transform = `scaleX(${seconds / DURATION})`;
  scrollCue.style.opacity = seconds > 0.6 ? '0' : '1';

  const clip = videoClips.find(({ start, end }) => seconds >= start && seconds <= end);
  if (clip && video.readyState >= HTMLMediaElement.HAVE_METADATA) {
    const targetTime = clip.sourceStart + seconds - clip.start;
    if (Math.abs(video.currentTime - targetTime) > 0.07) {
      video.currentTime = Math.min(targetTime, video.duration || targetTime);
    }
  }
}

const transcript = scenes
  .flatMap(
    (scene) =>
      scene.lines?.map(({ text }) => text) ?? [scene.line, scene.secondLine],
  )
  .filter(Boolean)
  .join(' ');
document.querySelector('#transcript').textContent =
  `A scroll-driven reconstruction of the Blue Alight Motion film. ${transcript} ` +
  'Scroll down to advance through the scenes and scroll up to reverse.';

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
