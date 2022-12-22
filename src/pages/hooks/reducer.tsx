import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useReducer } from 'react';
import { Modal } from '../../components/Modal';

export default function Reducer() {
	interface State {
		modalRed: boolean;
		modalBlue: boolean;
		modalGreen: boolean;
	}

	enum ModalAction {
		RED = 'modal-red',
		BLUE = 'modal-blue',
		GREEN = 'modal-green',
		CLOSE = 'close',
	}

	interface Action {
		type: ModalAction;
	}

	const initialState = {
		modalRed: false,
		modalBlue: false,
		modalGreen: false,
	};

	function reducer(state: State, action: Action) {
		switch (action.type) {
			case ModalAction.RED:
				return {
					modalRed: true,
					modalBlue: false,
					modalGreen: false,
				};
			case ModalAction.GREEN:
				return {
					modalRed: false,
					modalBlue: false,
					modalGreen: true,
				};
			case ModalAction.BLUE:
				return {
					modalRed: false,
					modalBlue: true,
					modalGreen: false,
				};
			case ModalAction.CLOSE:
				return {
					modalRed: initialState.modalRed,
					modalBlue: initialState.modalBlue,
					modalGreen: initialState.modalGreen,
				};

			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Flex h="calc(100vh - 4rem)" align="center" justify="center">
			<Stack spacing="8" align="center">
				<Button
					w={200}
					colorScheme="red"
					onClick={() => dispatch({ type: ModalAction.RED })}
				>
					Abrir modal vermelho
				</Button>
				<Button
					w={200}
					colorScheme="blue"
					onClick={() => dispatch({ type: ModalAction.BLUE })}
				>
					Abrir modal azul
				</Button>
				<Button
					w={200}
					colorScheme="green"
					onClick={() => dispatch({ type: ModalAction.GREEN })}
				>
					Abrir modal verde
				</Button>
			</Stack>

			<Modal
				isOpen={state.modalRed}
				onClose={() => dispatch({ type: ModalAction.CLOSE })}
				color="red"
			/>
			<Modal
				isOpen={state.modalGreen}
				onClose={() => dispatch({ type: ModalAction.CLOSE })}
				color="green"
			/>
			<Modal
				isOpen={state.modalBlue}
				onClose={() => dispatch({ type: ModalAction.CLOSE })}
				color="blue"
			/>
		</Flex>
	);
}
