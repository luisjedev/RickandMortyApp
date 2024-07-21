import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouter } from "./routes";
import { queryClient } from "./lib/tanstack-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
