import React from 'react'
import Card from './Card'
import { render } from '@testing-library/react'

describe('Card', ()=>{
    test('should render card component without crashing',()=>{
        render(<Card />)
    })  
})