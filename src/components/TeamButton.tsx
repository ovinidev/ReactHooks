import { Button, Flex } from '@chakra-ui/react';

interface TeamButtonProps {
	team: {
		name: string;
		color: string;
	};
}

export const TeamButton = ({ team }: TeamButtonProps) => {
	return <Button colorScheme={team.color}>{team.name}</Button>;
};
