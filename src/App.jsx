// eslint-disable-next-line no-unused-vars
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Landing from "./pages/Landing";
import { SubjectProvider } from "./Hooks/SubjectContext";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SubjectProvider>
        <Landing />
      </SubjectProvider>
    </QueryClientProvider>
  );
};

export default App;
