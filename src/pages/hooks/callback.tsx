import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

const fnCounter = new Set();

export default function Callback() {
	const [counter, setCounter] = useState(0);

	// Usar o useCallback quando queremos passar funções para comp. filhos
	const handlePlus = useCallback(() => {
		setCounter((prev) => prev + 1);
	}, []);

	fnCounter.add(handlePlus);
	console.log(fnCounter.size);

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<ButtonIncrement onClick={handlePlus} />
				<Text>{counter}</Text>
			</Stack>
		</Flex>
	);
}

interface ButtonIncrementProps {
	onClick: () => void;
}

function ButtonIncrement({ onClick }: ButtonIncrementProps) {
	return (
		<Button colorScheme="pink" onClick={onClick}>
			Increment
		</Button>
	);
}
