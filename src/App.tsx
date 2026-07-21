import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Classes } from './pages/Classes'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { Meetings } from './pages/Meetings'
import { Tours } from './pages/Tours'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="tours" element={<Tours />} />
          <Route path="classes" element={<Classes />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="join" element={<Join />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
