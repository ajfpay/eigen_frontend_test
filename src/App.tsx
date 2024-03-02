import React, { ReactElement, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(async () => await import("./pages/Home"));
const Detail = lazy(async () => await import("./pages/Detail"));

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:title" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
