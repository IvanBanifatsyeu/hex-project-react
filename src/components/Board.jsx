import React from "react";
import "./Board.css";
import ClickPrint from "./ClickPrint";

const Board = () => {
	const [arrayClicks, setArrayClicks] = React.useState([]);
	const [cashClicks, setCashClicks] = React.useState([]);

	function handleClick(e) {
		if (e.target.tagName === "DIV") {
			setArrayClicks([
				...arrayClicks,
				{ x: e.clientX - 10 + "px", y: e.clientY - 10 + "px" },
			]);
			setCashClicks([]);
		}
	}

	function handleUndo() {
		if (arrayClicks.length === 0) return;
		setCashClicks([...cashClicks, arrayClicks.pop()]);
	}

	function handleRedo() {
		if (cashClicks.length === 0) return;
		setArrayClicks([...arrayClicks, cashClicks.pop()]);
	}

	return (
		<div className="board" onClick={handleClick}>
			<button
				className={arrayClicks.length === 0 ? "empty" : ""}
				onClick={handleUndo}
			>
				Undo
			</button>
			<button
				className={cashClicks.length === 0 ? "empty" : ""}
				onClick={handleRedo}
			>
				Redo
			</button>
			{arrayClicks.length === 0 ||
				arrayClicks.map((click, ind) => (
					<ClickPrint key={ind} top={click.y} left={click.x} />
				))}
		</div>
	);
};

export default Board;
