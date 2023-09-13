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
				{ x: e.clientX + "px", y: e.clientY + "px" },
			]);
			setCashClicks([]);
		}
	}

	function handleUndo() {
		if (arrayClicks.length === 0) return;
		setCashClicks([...cashClicks, arrayClicks.at(-1)]);
		setArrayClicks(arrayClicks.slice(0, -1));
	}

	function handleRedo() {
		if (cashClicks.length === 0) return;
		setArrayClicks([...arrayClicks, cashClicks.at(-1)]);
		setCashClicks(cashClicks.slice(0, -1));
	}

	return (
		<div className="board" onClick={handleClick}>
			<button
				onClick={handleUndo}
				disabled={arrayClicks.length === 0 ? true : false}
			>
				Undo
			</button>
			<button
				onClick={handleRedo}
				disabled={cashClicks.length === 0 ? true : false}
			>
				Redo
			</button>
			{arrayClicks.map((click, ind) => (
				<ClickPrint key={ind} top={click.y} left={click.x} />
			))}
		</div>
	);
};

export default Board;
