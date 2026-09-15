import { CinematicScene } from './components/cinematic/CinematicScene'
import { SmoothScrollProvider } from './components/cinematic/SmoothScrollProvider'

export default function App() {
  return (
    <SmoothScrollProvider>
      <CinematicScene />
    </SmoothScrollProvider>
  )
}
