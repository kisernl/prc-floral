import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import OurStory from "./pages/OurStory";
import OurImpact from "./pages/OurImpact";
import Services from "./pages/Services";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import Jobs from "./pages/Jobs";
import Welcome from "./pages/Welcome";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/prc-gentle-bloom/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/story" element={<OurStory />} />
          <Route path="/about/impact" element={<OurImpact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
