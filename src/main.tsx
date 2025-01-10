import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./globals.min.css";
import {MainLayout} from "@/components/layouts/MainLayout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from "@/components/ThemeProvider";
import {Index} from "@/pages/Index/Index";
import {NotFound} from "@/pages/NotFound";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/me" element={<div>me</div>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
