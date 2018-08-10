import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

// Component to be tested
import DisplayData from '../containers/DisplayData';

describe('<DisplayData />', () => {
    describe('render()', () => {
      test('renders the component', () => {
        const wrapper = shallow(<DisplayData />);
        const component = wrapper.dive();
  
        //expect(toJson(component)).toMatchSnapshot();
      });
    });
  });

  // describe("DisplayData", () => {
  //   it("should render my component", () => {
  //     const wrapper = shallow(<DisplayData />);
  //   });
  // });