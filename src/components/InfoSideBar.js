import React from "react";
import "../styles/InfoSideBar.css";

export default function InfoSideBar(props) {
	return (
		<div className="info-sidebar">
			<a target="_blank" href={"https://en.wikipedia.org/wiki/" + props.wiki}>
				Wikipedia
			</a>
			<a href="#">Images</a>
			<a href="#">Video</a>
			<a href="#">Podcasts</a>
		</div>
	);
}
