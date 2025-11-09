import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import {Toaster} from "./components/ui/toaster.jsx";

function App() {

  return (
    <>
        <Toaster />
        <BrowserRouter basename="/Portfolio">
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" index element={<NotFound />} />
            </Routes>

        </BrowserRouter>

    </>
  )
}

export default App
