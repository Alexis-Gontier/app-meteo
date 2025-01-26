import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import HomePage from "./pages/HomePage"
import CityPage from "./pages/CityPage"

import TestPage from "./pages/TestPage"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/weather/:city" element={<CityPage />} />

        <Route path="/test" element={<TestPage />} />


        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
