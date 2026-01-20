import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Navbar from "./components/layout/Navbar"
import NotFound from "./components/pages/NotFound"
import { FlickeringGrid } from "./components/ui/flickering-grid"
import { ThemeProvider } from "./context/ThemeContext"
import OnekoCat from "./components/layout/Oneko"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <OnekoCat />
        <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
