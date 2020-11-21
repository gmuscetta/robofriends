import React from 'react';

//{props.children} references CardList
//{{}}=a js expr that returns an objec
const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;