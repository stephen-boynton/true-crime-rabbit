import React, { Component } from "react";
import "../styles/CaseIcon.css";

export default class CaseIcon extends Component {
	constructor(props) {
		super(props);
	}
	_selectCase = () => {
		this.props.select(this.props.wiki);
	};
	render() {
		return (
			<div onClick={this._selectCase} className="case-icon">
				<h3>{this.props.info.name}</h3>
				<div className="case-icon-description">
					<img src={this.props.info.img} />
					<p>{this.props.info.description}</p>
				</div>
			</div>
		);
	}
}
