import { Button, Flex } from '@chakra-ui/react';

interface RandomTeamWinProps {
	teamOne: string;
	teamTwo: string;
}

export default function Home() {
	const randomTeamWin = ({ teamOne, teamTwo }: RandomTeamWinProps) => {
		const randomNumberWin = Math.floor(Math.random() * 2);

		return randomNumberWin === 0 ? teamOne : teamTwo;
	};

	return (
		<Flex>
			<Flex>
				<Button colorScheme="blackAlpha">Alemanha</Button>
				<Button colorScheme="yellow">Brasil</Button>
				<Button
					onClick={() =>
						randomTeamWin({ teamOne: 'Alemanha', teamTwo: 'Brasil' })
					}
					colorScheme="green"
				>
					Sortear
				</Button>
			</Flex>
		</Flex>
	);
}
