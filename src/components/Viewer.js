import React from "react";
import "../styles/Viewer.css";

export default function Viewer(props) {
	let counter = 1;
	return (
		<div className="viewer">
			{props.content.map(p => {
				let returnJsx = <p key={counter}>{p}</p>;
				counter++;
				return returnJsx;
			})}
		</div>
	);
}
