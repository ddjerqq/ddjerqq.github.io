import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {MainLayout} from "@/components/layouts/MainLayout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from "@/components/ThemeProvider";
import {Index} from "@/pages/Index/Index";
import {NotFound} from "@/pages/NotFound";
import {Toaster} from "@/components/ui/sonner";
import "./globals.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/blog" element={<div>blog</div>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>

          <Toaster/>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
