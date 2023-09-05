import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Demo from "./Demo";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
}
