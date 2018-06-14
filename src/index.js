import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBrN0ue9XVZH9JjCrXaMXbDk4J1t4vlNd0'

// Create a new component. This component should produce some HTML
const App = () => {
	return <div>
		<SearchBar />
	</div>;
}



// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'))