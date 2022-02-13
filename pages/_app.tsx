import type { AppProps } from "next/app"
import Layout from "../components/ui/layout"
import { Provider as ReduxProvider } from "react-redux"

import { store } from "../store/redux/store"
import { QueryClientProvider, QueryClient } from "react-query"
import ThemeContextProvider from "../store/context/theme-context"

export const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <QueryClientProvider client={queryClient}>
                <ReduxProvider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ReduxProvider>
            </QueryClientProvider>
        </ThemeContextProvider>
    )
}

export default MyApp
