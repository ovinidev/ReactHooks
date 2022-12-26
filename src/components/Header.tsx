import { Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
	return (
		<Flex as="header" h="4rem" bg="gray.700" align="center" px="16">
			<HStack spacing="4" fontFamily="Roboto">
				<Link href="/hooks/context">Context</Link>
				<Link href="/hooks/effect">Effect</Link>
				<Link href="/hooks/state">State</Link>
				<Link href="/hooks/reducer">Reducer</Link>
				<Link href="/hooks/callback">Callback</Link>
			</HStack>
		</Flex>
	);
};
