import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Quote from "@/pages/Quote";
import PompanoBeach from "@/pages/PompanoBeach";
import Tampa from "@/pages/Tampa";
import Oldsmar from "@/pages/Oldsmar-Fl";
import OldsmarFl from "@/pages/Oldsmar";
import NotFound from "@/pages/not-found";
import Atlantis from "@/pages/SEO/Atlantis";
import Doral from "@/pages/SEO/Doral";
import Hollywood from "@/pages/SEO/Hollywood"
import CutlerBay from "@/pages/SEO/CutlerBay"


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/pompano-beach-boat-removal" component={PompanoBeach} />
      <Route path="/tampa-boat-removal" component={Tampa} />
      <Route path="/oldsmar-boat-removal" component={Oldsmar} />
      <Route path="/oldsmar-fl-boat-removal" component={OldsmarFl} />
      <Route path="/boat-removal-fl-atlantis" component={Atlantis} />
      <Route path="/boat-removal-fl-doral" component={Doral} />
      <Route path="/boat-removal-fl-hollywood" component={Hollywood} />
      <Route path="/boat-removal-fl-cutler-bay" component={CutlerBay} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
