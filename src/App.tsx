import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TeamStory from "./pages/TeamStory";
import AgencyCategories from "./pages/AgencyCategories";
import RankingMethodology from "./pages/RankingMethodology";
import TrendsArticles from "./pages/TrendsArticles";
import FAQ from "./pages/FAQ";
import SubmitAgency from "./pages/SubmitAgency";
import Sponsorship from "./pages/Sponsorship";
import AllAgencies from "./pages/AllAgencies";
import ContactUs from "./pages/ContactUs";
import PressReleases from "./pages/PressReleases";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team-story" element={<TeamStory />} />
          <Route path="/agency-categories" element={<AgencyCategories />} />
          <Route path="/ranking-methodology" element={<RankingMethodology />} />
          <Route path="/trends-articles" element={<TrendsArticles />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/submit-agency" element={<SubmitAgency />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/all-agencies" element={<AllAgencies />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/press-releases" element={<PressReleases />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
