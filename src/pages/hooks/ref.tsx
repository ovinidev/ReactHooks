import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useRef } from 'react';

export default function Ref() {
	const inputRef = useRef({ value: '' } as HTMLInputElement);
	const formRef = useRef({ value: '' } as HTMLInputElement);

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Input ref={inputRef} />
				<Button
					onClick={() => alert(inputRef.current.value)}
					colorScheme="messenger"
				>
					Print
				</Button>

				<Form ref={formRef} label="Ref" />
				<Button
					onClick={() => alert(formRef.current.value)}
					colorScheme="messenger"
				>
					Print
				</Button>
			</Stack>
		</Flex>
	);
}

interface FormProps {
	label?: string;
}

const FormBase: ForwardRefRenderFunction<HTMLInputElement, FormProps> = (
	{ label },
	ref: any,
) => {
	return (
		<FormControl>
			{label && <FormLabel>{label}</FormLabel>}
			<Input bg="gray.900" ref={ref} />
		</FormControl>
	);
};

const Form = forwardRef(FormBase);
