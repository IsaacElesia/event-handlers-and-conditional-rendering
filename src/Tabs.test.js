import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tabs from './Tabs';

describe('<Tabs />', () => {
	const tabsProp = [
		{
			name: 'First tab',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.',
		},
		{
			name: 'Second tab',
			content:
				'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			name: 'Third tab',
			content:
				'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.',
		},
	];

	//Smoke test
	it('render Tabs without error', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Tabs />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	//Snaphot test
	it('render empty Ul when tabProps is null ', () => {
		expect(renderer.create(<Tabs />).toJSON()).toMatchSnapshot();
	});

	//Using Enzyme
	it('renders the first tab by default ', () => {
		const wrapper = shallow(<Tabs tabsProp={tabsProp} />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders empty given no tabs', () => {
		const wrapper = shallow(<Tabs />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('closes the first tab and opens any clicked tab', () => {
		const wrapper = shallow(<Tabs tabsProp={tabsProp} />);

		console.log('>>> WRAPPER <<<');
		console.log(wrapper.debug());
		console.log('>>> FIND(BUTTON) <<<');
		console.log(wrapper.find('button').debug());
		console.log('>>> USING INDEX <<<');
		console.log(wrapper.find('button').at(1).debug());

		//Simulate Clikc Event
		wrapper.find('button').at(1).simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
