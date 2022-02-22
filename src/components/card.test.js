import { render, screen } from '@testing-library/react';
import Card from './Card';
import React from 'react';


test('loads card properly', () => {
    render(<Card id='1' name='Mr 1' email='baroqueworks@gmail.com'/>);
    const cards = screen.getAllByRole('img');
    expect(cards.length).toEqual(1);
})


test('height is correct', () => {
    render(<Card id='1' name='Mr 1' email='baroqueworks@gmail.com'/>);
    const cards = screen.getByRole('img')
    expect(cards.height).toEqual(200)
})


test('header is correct', () => {
    render(<Card id='1' name='Mr 1' email='baroqueworks@gmail.com'/>);
    render(<Card id='2' name='Mr 2' email='john@gmail.com'/>);
    screen.debug();
    const card = screen.getByText('Mr 1'); 
    expect(card).toHaveTextContent('Mr s1');
})