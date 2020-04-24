import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from './sections.data.js';

import './directory.styes.scss';

class Directory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: SECTIONS_DATA,
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
