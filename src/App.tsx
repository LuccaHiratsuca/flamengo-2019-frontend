import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserRoutes from './routes/User';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/user/*" element={<UserRoutes />} />
                    <Route path="*" element={<h1>404 - Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
