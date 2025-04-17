import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
	initValue: number;
	children?: JSX.Element; // para que el componente pueda recibir hijos
}

export const Counter: Component<Props> = (props) => { // sí desestructuramos propr, pierde la reactividad (pasa solo en solid)

    const [ counter, setCounter ] = createSignal(props.initValue);

	return (
		<>
			{/* <h1 class="text-4xl">Counter</h1> */}
			{props.children}
			<h3 class="text-xl">Value: { counter() } </h3>
			<button 
                onClick={ () => setCounter(counter() + 1) }
                class="bg-blue-500 p-2 mr-2 rounded">Increment +1</button>
			<button 
                onClick={ () => setCounter((prev) => prev - 1) } // para evitar invocar el couter() una vez más
                class="bg-blue-500 p-2 mr-2 rounded">Decrement -1</button>
		</>
	);
};