import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
	children: ReactNode;
	href: string;
}

export const Link = ({ children, href }: LinkProps) => {
	return (
		<NextLink href={href}>
			<Flex _hover={{ filter: 'brightness(0.6)' }}>{children}</Flex>
		</NextLink>
	);
};
