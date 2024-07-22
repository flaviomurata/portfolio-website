import './settings.css'
import './App.css'
import NavBar from './components/NavBar'
import Works from './components/Works'
import { useEffect } from 'react'
import gsap from 'gsap'

function App() {
  useEffect(() => {
    const toggle = {
      element: document.querySelector('.nav_selector_toggle'),
      circle: document.querySelector('.nav_selector_toggle_circle'),
    }
    const view = {
      grid: document.querySelector('.works_grid'),
      index: document.querySelector('.works_index'),
      indexItems: document.querySelectorAll('.works_index_item'),
      indexMediaImages: document.querySelectorAll(
        '.works_index_item_media_image',
      ),
      indexMediaArrows: document.querySelectorAll(
        '.works_index_item_media_arrow',
      ),
    }
    let isActive = false

    const animateIndexItem = (item: Element) => {
      const itemImages = item.querySelectorAll('.works_index_item_media_image')
      const itemArrows = item.querySelectorAll('.works_index_item_media_arrow')
      const itemTexts = item.querySelectorAll('.works_index_item_text')

      const tlIndexrow = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.6, ease: 'expo.inOut' },
        })
        .to(itemArrows, { autoAlpha: 1, xPercent: 0 })
        .to(itemImages, { autoAlpha: 1, yPercent: 0, stagger: 0.032 }, 0)
        .to(itemTexts, { autoAlpha: 0 }, 0)

      item.addEventListener('mouseenter', () => {
        tlIndexrow.play()
      })
      item.addEventListener('mouseleave', () => {
        tlIndexrow.reverse()
      })
    }

    const addEventListeners = () => {
      // ?-----> Create timelines for both Nav and View components
      const tlToggle = gsap.timeline({ paused: true }).to(toggle.circle, {
        xPercent: 140,
        duration: 0.2,
        ease: 'expo.inOut',
      })

      gsap.set(view.index, { autoAlpha: 0, display: 'none' })
      const tlView = gsap.timeline({ paused: true }).to(view.grid, {
        duration: 0.64,
        autoAlpha: 0,
        display: 'none',
        ease: 'expo.inOut',
        onComplete: () => {
          tlView.to(view.index, { autoAlpha: 1, display: 'block' })
        },
      })

      // ?-----> Animate Nav Toggle component
      toggle.element?.addEventListener('click', () => {
        !isActive ? tlToggle.play() : tlToggle.reverse()
        !isActive ? tlView.play() : tlView.reverse()
        isActive = !isActive
      })

      // ?-----> Animate View Index component
      view.indexItems.forEach((item) => {
        gsap.set(view.indexMediaImages, { autoAlpha: 0, yPercent: 100 })
        gsap.set(view.indexMediaArrows, { autoAlpha: 0, xPercent: -100 })
        animateIndexItem(item)
      })
    }
    addEventListeners()
  }, [])

  return (
    <main className="app">
      <NavBar />
      <Works />
    </main>
  )
}

export default App
