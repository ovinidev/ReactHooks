import { Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

export default function Memo() {
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState('');

	const handlePlus = () => {
		setCounter((prev) => prev + 1);
	};

	const total = useMemo(() => {
		console.log('useMemo rodou');

		return counter * 21515 * 155 * 1541515;
	}, [counter]);

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Button colorScheme="facebook" onClick={handlePlus}>
					Increment
				</Button>
				<Text>{total}</Text>
				<Input onChange={(e) => setText(e.target.value)} />
				<Text>{text}</Text>
			</Stack>
		</Flex>
	);
}
