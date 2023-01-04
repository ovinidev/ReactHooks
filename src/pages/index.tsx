import { Button, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { TeamButton } from '../components/TeamButton';

interface RandomTeamWinProps {
	teamOne: {
		name: string;
		color: string;
	};
	teamTwo: {
		name: string;
		color: string;
	};
}

interface TeamWinProps {
	name: string;
	color: string;
}

const teams = {
	brasil: {
		name: 'Brasil',
		color: 'yellow',
	},
	alemanha: {
		name: 'Alemanha',
		color: 'blackAlpha',
	},
	frança: {
		name: 'França',
		color: 'blue',
	},
	argentina: {
		name: 'Argentina',
		color: 'blue',
	},
};

export default function Home() {
	const [teamWinner, setTeamWinner] = useState<TeamWinProps>(
		{} as TeamWinProps,
	);

	const randomTeamWin = ({ teamOne, teamTwo }: RandomTeamWinProps) => {
		const randomNumberWin = Math.floor(Math.random() * 2);

		setTeamWinner(randomNumberWin === 0 ? teamOne : teamTwo);
	};

	return (
		<Flex align="center" justify="center" h="calc(100vh - 4rem)">
			<Stack
				spacing="8"
				direction="column"
				py="16"
				px="24"
				bg="gray.700"
				borderRadius="6px"
				align="center"
				justify="flex-start"
			>
				<Heading>Sorteador</Heading>

				<HStack spacing="4" w={200}>
					<TeamButton team={teams.frança} />
					<TeamButton team={teams.argentina} />
				</HStack>

				<Button
					onClick={() =>
						randomTeamWin({ teamOne: teams.argentina, teamTwo: teams.frança })
					}
					w={200}
					mt="1rem"
					colorScheme="green"
				>
					Sortear
				</Button>

				<Text fontSize="2rem" color={`${teamWinner.color}.500`}>
					{teamWinner.name}
				</Text>
			</Stack>
		</Flex>
	);
}
