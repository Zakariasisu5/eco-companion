
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcoWaste from "./pages/EcoWaste";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/layout/Header";
import SustainableLiving from "./pages/SustainableLiving";
import GreenCommute from "./pages/GreenCommute";
import EnergySaver from "./pages/EnergySaver";
import TreePlanting from "./pages/TreePlanting";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <div className="pt-16"> {/* Add padding to avoid content being hidden under the fixed header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/eco-waste" element={<EcoWaste />} />
              <Route path="/sustainable-living" element={<SustainableLiving />} />
              <Route path="/green-commute" element={<GreenCommute />} />
              <Route path="/energy-saver" element={<EnergySaver />} />
              <Route path="/tree-planting" element={<TreePlanting />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
