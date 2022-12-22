import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { TextProvider } from '../contexts/themeContext';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<TextProvider>
				<Header />
				<Component {...pageProps} />
			</TextProvider>
		</ChakraProvider>
	);
}
