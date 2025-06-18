
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import RetailRewards from "./pages/RetailRewards";
import Welcome from "./pages/Welcome";
import Stories from "./pages/Stories";
import OurTeam from "./pages/OurTeam";
import OurStory from "./pages/OurStory";
import OurImpact from "./pages/OurImpact";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/story" element={<OurStory />} />
          <Route path="/about/impact" element={<OurImpact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/retail-rewards" element={<RetailRewards />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
