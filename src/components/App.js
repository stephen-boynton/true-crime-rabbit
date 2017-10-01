import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";
import "../styles/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			cases: []
		};
	}
	componentDidMount() {
		axios({
			url:
				"https://en.wikipedia.org//w/api.php?action=parse&format=json&pageids=10177677&page=Tamam%20Shud%20case&origin=*",
			method: "GET",
			dataType: "json",
			origin: "*",
			header: {
				"Api-User-Agent": "True Crime Rabbit",
				"Content-Type": "application/json; charset=UTF-8"
			}
		}).then(response => {
			const $ = cheerio.load(response.data.parse.text["*"]);
			console.log($("*").text());
		});
	}
	render() {
		return <div className="App" />;
	}
}

export default App;
