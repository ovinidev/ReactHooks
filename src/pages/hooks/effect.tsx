import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Effect() {
	const [counter, setCounter] = useState<number>(0);
	const [isPaused, setPaused] = useState<boolean>(false);

	const handleIncrement = () => {
		setCounter((state) => state + 1);
	};

	const handlePause = () => {
		setPaused(!isPaused);
	};

	// Irá acionar a cada renderização da página
	useEffect(() => {
		console.log('useEffect executado em todo render');
	});

	// Irá acionar na primeira renderização da página
	useEffect(() => {
		console.log('useEffect executado no first render');
	}, []);

	// Irá acionar sempre que os estados isPaused e counter tiverem alteração
	useEffect(() => {
		if (!isPaused) {
			setTimeout(() => {
				handleIncrement();
			}, 1000);
		}

		console.log('useEffect executado quando o counter muda');
	}, [isPaused, counter]);

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Button colorScheme="pink" onClick={handlePause}>
					{isPaused ? 'Play' : 'Pause'}
				</Button>
				<Text color="pink.600" fontSize="4rem">
					{counter}
				</Text>
			</Stack>
		</Flex>
	);
}
