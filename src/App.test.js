import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

 describe('App', ()=>{
  it('Should render without crashing', function(){
    const app = shallow(<App/>)
    expect(app.length).toBe(1)

   });
});