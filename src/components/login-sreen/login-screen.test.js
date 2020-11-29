import React from "react";
import renderer from "react-test-renderer";
import {LogInScreen} from "./login-screen";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {InitialState} from "../../__mocks__/mocks";

const mockStore = configureStore();
const noop = () => {};

describe(`LogInScreen render correctly`, () => {
  const store = mockStore(InitialState);

  it(`LogInScreen with valid form`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <LogInScreen
              onSubmit={noop}
              formRef={React.createRef()}
              isValid={true}
              currentCity={`Paris`}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`LogInScreen with invalid form`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <LogInScreen
              onSubmit={noop}
              formRef={React.createRef()}
              isValid={false}
              currentCity={`Paris`}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
