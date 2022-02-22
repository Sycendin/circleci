import renderer from 'react-test-renderer'
import CounterButton from './CounterButton'
import React from 'react'

it('expect to render counterbutton', () =>{
    const mockColor = 'red';
    const button = renderer.create(<CounterButton color={mockColor}/>).toJSON()
    expect(button).toMatchSnapshot();
})


it('correctly increments counter', () => {
    const mockColor = 'red';
    const component = renderer.create(<CounterButton color={mockColor}/>)
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick()
    button.props.onClick()
    expect(button.props.children[1]).toBe(2)
    expect(button.props.color).toBe('red') 

})


it('button color is correct', () => {
    const mockColor = 'red';
    const component = renderer.create(<CounterButton color={mockColor}/>)
    const instance = component.root;
    const button = instance.findByType("button");
    expect(button.props.color).toBe('red')  

})