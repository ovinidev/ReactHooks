import { createContext, ReactNode, useContext, useState } from 'react';

interface TextContextProps {
	children: ReactNode;
}

interface TextContextData {
	text: string;
	handleText: (text: string) => void;
}

const TextContext = createContext({} as TextContextData);

export const TextProvider = ({ children }: TextContextProps) => {
	const [text, setText] = useState<string>('');

	const handleText = (text: string) => {
		setText(text);
	};

	return (
		<TextContext.Provider value={{ text, handleText }}>
			{children}
		</TextContext.Provider>
	);
};

export const useText = () => {
	const context = useContext(TextContext);

	return context;
};
