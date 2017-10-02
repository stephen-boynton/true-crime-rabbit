import React from "react";
import ImageCard from "./ImageCard";
import "../styles/Viewer.css";

export default function ViewerImages(props) {
	let counter = 1;
	return (
		<div className="viewer">
			{props.images.map(image => {
				let bang = counter;
				counter++;
				return <ImageCard key={bang} url={image} />;
			})}
		</div>
	);
}
