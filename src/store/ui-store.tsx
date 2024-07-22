import { create } from 'zustand'
import gsap from 'gsap'

interface UIState {
  element: React.RefObject<HTMLDivElement> | null
  setElement: (value: React.RefObject<HTMLDivElement>) => void
  isActive: boolean
  setIsActive: (value: boolean) => void
  tlToggle: (circle: React.RefObject<HTMLDivElement>) => gsap.core.Timeline
}

export const useUIStore = create<UIState>((set) => ({
  element: null,
  setElement: (value) => set({ element: value }),
  isActive: false,
  setIsActive: (value) => ({ isActive: value }),
  tlToggle: (circle: React.RefObject<HTMLDivElement>) =>
    gsap.timeline({ paused: true }).to(circle, {
      xPercent: 140,
      duration: 0.2,
      ease: 'expo.inOut',
    }),
}))
