import React, { Component } from "react";
import cases from "./info/cases";
import CasesSideBar from "./CasesSideBar";
import Header from "./Header";
import Viewer from "./Viewer";
import InfoSideBar from "./InfoSideBar";
import { getWikiInfo } from "./helpers/wikiAPI";

import "../styles/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentCase: "",
			caseInfo: [],
			cases: cases
		};
	}

	_selectCase = async wikiName => {
		console.log(wikiName);
		const caseName = wikiName;
		this.setState({
			currentCase: wikiName
		});
		const content = await getWikiInfo(wikiName);
		this.setState({
			caseInfo: content
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<div className="main">
					<CasesSideBar select={this._selectCase} cases={this.state.cases} />
					<div className="right-side">
						<Viewer content={this.state.caseInfo} />
						<InfoSideBar wiki={this.state.currentCase} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
