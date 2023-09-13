import React from "react";

const ClickPrint = ({ top, left }) => {
	return (
		<div
			style={{
				height: "20px",
				width: "20px",
				backgroundColor: "red",
				position: "absolute",
				top: top,
				left: left,
				borderRadius: "50%",
				transform: "translate(-50%, -50%)",
			}}
		></div>
	);
};

export default ClickPrint;
