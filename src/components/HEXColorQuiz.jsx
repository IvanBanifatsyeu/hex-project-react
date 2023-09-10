import React from "react";
import "./HEXColorQuiz.css";

const HEXColorQuiz = () => {
	const [backgroundColor, setBackgroundColor] = React.useState("transparent");
	const [randomNumber, setRandomNumber] = React.useState(null);
	const [result, setResult] = React.useState(null);
	const [isShow, setIsShow] = React.useState(false);

	React.useEffect(() => {
		setBackgroundColor(generateHEXColor());
		setRandomNumber(generateNumber());
	}, []);

	function generateHEXColor() {
		const hex = "0123456789ABCDEF";
		let output = "#";
		for (let i = 0; i < 6; ++i) {
			output += hex.charAt(Math.floor(Math.random() * hex.length));
		}
		return output;
	}

	function generateNumber() {
		return Math.ceil(Math.random() * 3);
	}

	function handleClick(e) {
		setResult(e.target.innerText === backgroundColor);
		setBackgroundColor(generateHEXColor());
		setRandomNumber(generateNumber());
		setIsShow(true);
	}

	return (
		<>
			<div className="wrapper">
				<div
					className="window"
					style={{ backgroundColor: backgroundColor }}
				></div>
				<div className="buttons">
					<button
						className="button"
						onClick={(e) => {
							handleClick(e);
						}}
					>
						{randomNumber === 1 ? backgroundColor : generateHEXColor()}
					</button>
					<button
						className="button"
						onClick={(e) => {
							handleClick(e);
						}}
					>
						{randomNumber === 2 ? backgroundColor : generateHEXColor()}
					</button>
					<button
						className="button"
						onClick={(e) => {
							handleClick(e);
						}}
					>
						{randomNumber === 3 ? backgroundColor : generateHEXColor()}
					</button>
				</div>
				<div className="result" style={{ color: result ? "green" : "red" }}>
					{isShow && (result ? "Correct!" : "Wrong Answer")}
				</div>
			</div>
		</>
	);
};

export default HEXColorQuiz;
