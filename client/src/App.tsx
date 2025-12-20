import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function AppRouter() {
  const base = import.meta.env.PROD ? '/malik-portfolio' : '';
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  // Handle 404 redirects
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      window.history.replaceState({}, '', '/malik-portfolio' + redirect);
    }
  }, []);
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;