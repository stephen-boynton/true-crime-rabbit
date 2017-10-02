import React from "react";
import CaseIcon from "./CaseIcon";
import "../styles/CasesSideBar.css";

export default function CasesSideBar(props) {
	return (
		<div className="cases-sidebar">
			{props.cases.map(c => {
				return (
					<CaseIcon wiki={c.wiki} select={props.select} key={c.name} info={c} />
				);
			})}
		</div>
	);
}
