import { shallow } from "enzyme";
import Button from ".";

describe('Button component', () => {
  let wrapper

  let handleClick = jest.fn()
  beforeEach(() => {
    const props = {
      label: "Click here",
      className: "test-class",
      onClick: handleClick,
      disabled: false,
      testId: 'test-button'
    }
    wrapper = shallow(<Button {...props} />)
  })

  test('Should have class "test-class"', () => {
    expect(wrapper).toHaveClassName("test-class");
  })

  test('Should call "handleClick" on click', () => {
    wrapper.simulate("click");
    expect(handleClick).toBeCalled();
  })

  test('Should have label "Click here"', () => {
    const label = wrapper.text()
    expect(label).toBe("Click here");
  })
})