import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/InfoSideBar.css";

export default class InfoSideBar extends Component {
	constructor(props) {
		super(props);
	}
	_getImages = () => {
		this.props.images(this.props.wiki);
	};
	render() {
		return (
			<div className="info-sidebar">
				<a
					target="_blank"
					href={"https://en.wikipedia.org/wiki/" + this.props.wiki}
				>
					Wikipedia
				</a>
				<Link to="/images" onClick={this._getImages}>
					Images
				</Link>
				<a href="#">Video</a>
				<a href="#">Podcasts</a>
			</div>
		);
	}
}
