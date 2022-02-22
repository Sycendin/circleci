import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer'
// import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = renderer.create(<MainPage {...mockProps}/>).toJSON();
 })

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters Robots', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false
  }
  wrapper = renderer.create(<MainPage {...mockProps}/>)
  const instance = wrapper.getInstance()
  expect(instance.filterRobots([])).toStrictEqual([]);
});

// it('fileters Robots correctly', () => {  
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Leanne',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
// });

// it('fileters Robots correctly 2', () => {
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Xavier',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual([]);
// });


// import renderer from 'react-test-renderer'
// import React from 'react'
// import RoboApp from '../../../redux-performance/src/containers/RoboApp'
// import { Provider } from 'react-redux';
// let wrapper;
// beforeEach(()=>{
//     const mockProps = {
//         onRequestsRobots: jest.fn(),
//         robots: [],
//         searchField: '',
//         isPending: false
//     }
//     wrapper = renderer.create(<Provider store={mockProps}><RoboApp/></Provider>).toJSON()
// })
// it('expect to render App component', () =>{

//     expect(app).toMatchSnapshot(); 
// })