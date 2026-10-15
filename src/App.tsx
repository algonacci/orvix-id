import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Tentang from "./pages/Tentang";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import Harga from "./pages/Harga";
import AiGateway from "./pages/products/AiGateway";
import Coding from "./pages/products/Coding";
import ApiStore from "./pages/products/ApiStore";
import Domain from "./pages/products/Domain";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* C3 routes */}
            <Route path="/harga" element={<Harga />} />
            <Route path="/ai-gateway" element={<AiGateway />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/api-store" element={<ApiStore />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/layanan" element={<Layanan />} />
            {/* End C3 routes */}
            <Route path="/about" element={<Tentang />} />
            <Route path="/services" element={<Layanan />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
