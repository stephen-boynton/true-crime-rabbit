import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import cases from "./info/cases";
import CasesSideBar from "./CasesSideBar";
import Header from "./Header";
import ViewerWiki from "./ViewerWiki";
import ViewerImages from "./ViewerImages";
import ViewerPodcasts from "./ViewerPodcasts";
import InfoSideBar from "./InfoSideBar";
import { getWikiInfo, getWikiImages } from "./helpers/wikiAPI";

import "../styles/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentCase: "",
			images: [],
			caseInfo: [],
			cases: cases
		};
	}

	_selectCase = async wikiName => {
		const caseName = wikiName;
		const content = await getWikiInfo(wikiName);
		this.setState({
			currentCase: caseName,
			caseInfo: content
		});
	};

	_getImages = async wikiName => {
		const imgs = await getWikiImages(wikiName);
		this.setState({
			images: imgs
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<div className="main">
					<CasesSideBar select={this._selectCase} cases={this.state.cases} />
					<div className="right-side">
						<Switch>
							<Route exact path="/podcasts" component={ViewerPodcasts} />
							<Route
								exact
								path="/images"
								component={() => <ViewerImages images={this.state.images} />}
							/>
							<Route
								exact
								path="/"
								component={() => <ViewerWiki content={this.state.caseInfo} />}
							/>
						</Switch>

						<InfoSideBar
							images={this._getImages}
							wiki={this.state.currentCase}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
