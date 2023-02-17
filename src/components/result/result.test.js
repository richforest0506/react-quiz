import { shallow } from "enzyme";
import renderer from "react-test-renderer"
import Result from ".";

/**
 * Snapshot test
 */

const mockedUsedNavigate = jest.fn()
const navigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/result",
    state: {
      result: 1
    }
  }),
  useNavigate: () => mockedUsedNavigate
}))


describe('Result Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Result />);
  })

  test('Match the snapshot', () => {
    const tree = renderer.create(<Result />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('header', () => {
    let header = wrapper.find(`[data-test='result-header']`).text()
    expect(header).toBe('Your Result')
  })

  test('title', () => {
    let title = wrapper.find(`[data-test='result-title']`).text()
    expect(title).toBe("You are more of a public extrovert and private introvert")
  })

  test('content', () => {
    let content = wrapper.find(`[data-test='result-content']`).text()
    expect(typeof content).toBe("string")
  })
})