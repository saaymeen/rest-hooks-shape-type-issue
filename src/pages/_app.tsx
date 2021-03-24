import type { AppProps } from 'next/app';
import { ReactElement, Suspense } from 'react';
import { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
	// disable ssr because suspense is not supported on ReactDOMServer yet
	if (typeof window === 'undefined') {
		return null;
	}

	return (
		<CacheProvider>
			<Suspense fallback={<p>loading</p>}>
				<NetworkErrorBoundary>
					<Component {...pageProps} />
				</NetworkErrorBoundary>
			</Suspense>
		</CacheProvider>
	);
};

export default App;
