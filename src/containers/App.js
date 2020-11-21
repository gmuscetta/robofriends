import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//State describes app. What can change.
class App extends Component {
	constructor(){//PART OF REACT
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
		console.log('constructor');
	}

	componentDidMount(){//PART OF REACT
		//makes http request to get robot info
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}));//displays robots in current state
		console.log('componentDidMount');
	}

	onSearchChange=(event)=>{
	this.setState({searchfield: event.target.value})
	//console.log(filteredRobots);	
	}

	render(){//PART OF REACT
	const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robot =>{
	return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	 })

	console.log('render');
	//Scrolls child is CardList
	//same as robots.length === 0
	return !robots.length ?
	<h1>Loading</h1> :
	(
		<div className='tc'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);		
	}
}

export default App;