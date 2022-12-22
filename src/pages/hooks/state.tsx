import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useText } from '../../contexts/themeContext';

export default function State() {
	// State que servirá como um contador
	const [counter, setCounter] = useState(0);

	// Função que irá incrementar o contador, através da função setCounter
	const handleIncrement = () => {
		setCounter((state) => state + 1);
	};

	// Função que irá decrementar o contador, através da função setCounter
	const handleDecrement = () => {
		if (counter > 0) setCounter((state) => state - 1);
	};

	// Através do Context podemos utilizas states, funções em diversos
	// locais da aplicação
	const { text } = useText();

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Button colorScheme="pink" onClick={handleIncrement}>
					Increment
				</Button>
				<Button colorScheme="pink" onClick={handleDecrement}>
					Decrement
				</Button>
				<Text color="pink.600" fontSize="4rem">
					{counter} {text}
				</Text>
			</Stack>
		</Flex>
	);
}
