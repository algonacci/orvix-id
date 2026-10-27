import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
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
import AiPlan from "./pages/AiPlan";

const queryClient = new QueryClient();
function SiteNavigation() {
  const { pathname } = useLocation();
  return pathname.replace(/\/$/, "") === "/ai-plan" ? <header className="absolute inset-x-0 top-0 z-10 border-b border-white/10"><nav aria-label="Navigasi AI Plan" className="container mx-auto flex h-20 items-center justify-between px-5"><Link to="/" className="text-2xl font-bold tracking-tight">orvix<span className="text-primary">.</span></Link><a href="#checkout" className="text-sm font-semibold text-primary">Aktifkan AI Plan →</a></nav></header> : <Navbar />;
}
function SiteFooter() {
  const { pathname } = useLocation();
  return pathname.replace(/\/$/, "") === "/ai-plan" ? <footer className="border-t border-white/10 p-8 text-center text-sm text-text-secondary">Orvix Cloud Platform · <Link to="/" className="text-primary">Kembali ke beranda</Link></footer> : <Footer />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SiteNavigation />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* C3 routes */}
            <Route path="/harga" element={<Harga />} />
            <Route path="/ai-gateway" element={<AiGateway />} />
            <Route path="/ai-plan" element={<AiPlan />} />
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
        <SiteFooter />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
