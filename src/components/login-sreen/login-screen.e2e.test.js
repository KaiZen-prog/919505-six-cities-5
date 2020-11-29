import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LogInScreen} from "./login-screen";

configure({adapter: new Adapter()});
const noop = () => {};

it(`LogInScreen form submitted correctly`, () => {
  const handleFromSubmit = jest.fn();

  const wrapper = shallow(
      <LogInScreen
        onSubmit={handleFromSubmit}
        formRef={React.createRef()}
        isValid={true}
        currentCity={`Paris`}
      />
  );
  const loginForm = wrapper.find(`.login__form`);
  loginForm.simulate(`submit`, {preventDefault: noop});
  expect(handleFromSubmit).toHaveBeenCalledTimes(1);
});
