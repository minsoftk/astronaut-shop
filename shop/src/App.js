/* eslint-disable */

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

/* component container */
import ShoesList from './container/ShoesList';
import MainPage from './container/MainPage';
import About from './container/About';
import Astronaut from './container/Astronaut';

/* data */
import Data from './Data/ShoesData';
import Data2 from './Data/ShoesData2';

const App = () => {
	let [shoes, setShoes] = useState(Data);
	let [wshoes, setWshoes] = useState(Data2);

	return (
		<div className="App">
			<div className="no-display">화면이 너무 작습니다. </div>
			<Switch>
				<Route exact path="/">
					<MainPage></MainPage>
				</Route>
				<Route exact path="/manshoes">
					<ShoesList num={0}></ShoesList>
				</Route>
				<Route exact path="/womanshoes">
					<ShoesList num={1}></ShoesList>
				</Route>
				<Route path="/description">
					<Astronaut></Astronaut>
				</Route>
				<Route path="/manshoes/:id">
					<About shoes={shoes}></About>
				</Route>
				<Route path="/womanshoes/:id">
					<About shoes={shoes}></About>
				</Route>
				{/* <Route path="/womanshoes/:id">
					<About shoes={shoes}></About>
				</Route> */}
			</Switch>
		</div>
	);
};

export default App;
