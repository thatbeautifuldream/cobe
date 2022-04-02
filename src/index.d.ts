import Phenomenon from 'phenomenon'

export interface Marker {
  location: [number, number]
  size: number
}

export interface COBEOptions {
  width: number
  height: number
  onRender: (state: Record<string, any>) => void
  phi: number
  theta: number
  mapSamples: number
  mapBrightness: number
  baseColor: [number, number, number]
  markerColor: [number, number, number]
  glowColor: [number, number, number]
  markers: Marker[]
  diffuse: number
  devicePixelRatio: number
  dark: number
  offset?: [number, number]
  scale?: number
}

export default function createGlobe(
  canvas: HTMLCanvasElement,
  opts: COBEOptions
): Phenomenon
