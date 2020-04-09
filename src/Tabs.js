import React, { Component } from 'react';

export class Tabs extends Component {
	state = {
		content: null,
		index: null,
	};

	static defaultProps = { tabsProp: [] };

	handleClick = (item, index) => {
		this.setState({ content: item.content, index });
	};

	renderContent = () => {
		return this.props.tabsProp.map((item, index) => {
			return (
				<li key={index}>
					<button onClick={() => this.handleClick(item, index)}>
						{item.name}
					</button>
					{this.state.index === index && <p>{this.state.content}</p>}
				</li>
			);
		});
	};

	render() {
		return (
			<div>
				<ul>{this.renderContent()}</ul>
			</div>
		);
	}
}

export default Tabs;
