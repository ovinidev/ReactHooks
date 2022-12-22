import {
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	color: string;
}

export const Modal = ({ isOpen, onClose, color }: ModalProps) => {
	return (
		<>
			<ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent bg={`${color}.300`} h={150}>
					<ModalHeader
						display="flex"
						justifyContent="center"
						color={`${color}.900`}
					>
						Modal {color}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>

					<ModalFooter>
						<Button colorScheme={color} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</ChakraModal>
		</>
	);
};
