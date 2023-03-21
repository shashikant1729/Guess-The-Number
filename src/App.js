import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [win, setWin] = useState(false);
	const [original_number, setOriginal_Number] = useState(0);
	const [guess_number, setGuess_Number] = useState(0);
	const [attempts, setAttempts] = useState(0);
	const [showHint, setShowHint] = useState(false);
	const handleChange = (event) => {
		setShowHint(false);
		setGuess_Number(parseInt(event.target.value));
		console.log(guess_number);
	};
	const checkChange = () => {
		console.log(guess_number, original_number);
		console.log(attempts);
		setShowHint(true);
		if (guess_number === original_number) {
			setWin(true);
		} else {
			setAttempts(attempts + 1);
		}
	};
	const startChanges = () => {
		setWin(false);
		setAttempts(0);
		setGuess_Number(0);
		setAttempts(0);
		let x = Math.floor(Math.random() * 100 + 1);
		setOriginal_Number(x);
	};
	console.log("original number", original_number);
	return (
		<div className="flex flex-col w-screen h-screen bg-orange-200">
			<div className="flex w-full justify-center md:text-5xl text-3xl text-green-400 ">
				<p className="my-10 transition-all duration-200 ease-out">
					Guess The Number
				</p>
			</div>
			<div className="flex flex-grow flex-col mt-10 gap-16">
				<div
					id="start"
					className="flex w-1/4 h-12 place-items-center text-xl hover:bg-green-600 hover:cursor-pointer place-self-center justify-center rounded-lg bg-green-400"
					onClick={startChanges}
					type="button"
				>
					Start
				</div>
				<div
					id="original_number_&_attempt"
					className="flex flex-row h-40 w-full md:w-1/2 gap-2 place-self-center px-4"
				>
					<div
						id="original_number"
						className={`flex w-1/2 place-items-center justify-center h-full text-5xl rounded-xl transition-all duration-500 ease-in-out ${
							win ? "bg-white text-black " : "bg-green-600"
						}`}
					>
						{win ? original_number : ""}
					</div>
					<div
						id="attempt"
						className="flex w-1/2 place-items-center justify-center h-full text-3xl"
					>
						Attempts : {attempts}
					</div>
				</div>
				<div
					id="type_the_number"
					className="flex px-4 flex-col w-full md:w-1/2 place-self-center gap-6"
				>
					<input
						type="number"
						name=""
						id="input"
						value={guess_number}
						className="w-full rounded-md bg-slate-200 h-16 text-2xl pl-2"
						onChange={handleChange}
					/>
					<button
						type="button"
						disabled={win}
						className="w-1/4 rounded-lg bg-green-500 p-2 text-xl place-self-center hover:bg-green-700"
						onClick={checkChange}
					>
						Go
					</button>
					{showHint ? (
						!win ? (
							<p>
								Hint :{" "}
								{`Guessed Number in ${
									guess_number > original_number ? `Large` : `Small`
								} than Original Number`}
							</p>
						) : (
							<>Well Done ! Start Again</>
						)
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
