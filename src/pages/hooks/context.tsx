import { Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useText } from '../../contexts/themeContext';

export default function Context() {
	const { handleText, text } = useText();

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Input
					w={350}
					py="6"
					focusBorderColor="pink.600"
					onChange={(e) => handleText(e.target.value)}
				/>
				<Text color="pink.600" fontSize="2rem">
					{text}
				</Text>
			</Stack>
		</Flex>
	);
}
