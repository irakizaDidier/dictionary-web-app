import React from 'react';

import sad from '../../assets/images/sad.svg';

import './NotFound.css';
const Index : React.FC = () => {
	return (
	  <div className="not-found">
		<img src={sad} alt="sad" className="not-found__emoji" />
		<h2 className="not-found__title">No Definitions Found</h2>
		<p className="not-found__description">
		  Sorry pal, we couldn't find definitions for the word you were looking
		  for. You can try the search again at a later time or head to the web instead.
		</p>
	  </div>
	);
  };

export default Index;
