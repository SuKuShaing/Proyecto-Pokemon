import { createSignal } from "solid-js";

export const Counter = () => {

    const [ counter, setCounter ] = createSignal(100);

	return (
		<>
			<h1 class="text-4xl">Counter</h1>
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