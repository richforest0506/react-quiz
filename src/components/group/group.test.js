import { shallow } from "enzyme";
import Group from ".";

let setSelectedAnswer = jest.fn();

describe('Group component', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      question:   {
        id: 1,
        question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
        answers: [
          {
            value: 'A',
            content: 'Don’t dare to interrupt them',
            point: 1
          },
          {
            value: 'B',
            content: 'Think it’s more important to give them some of your time; work can wait',
            point: 1
          },
          {
            value: 'C',
            content: 'Listen, but with only with half an ear',
            point: 2
          },
          {
            value: 'D',
            content: 'Interrupt and explain that you are really busy at the moment',
            point: 3
          }
        ]
      },
      length: 14,
      setSelectedAnswer: setSelectedAnswer,
      selectedAnswer: 0
    }
    wrapper = shallow(<Group {...props} />)
  })

  test('Should render 4 possible answers', () => {
    const answers = wrapper.find(`[data-test='question-group']`)
    expect(answers.length).toBe(4)
  })

  test('Should have class "selected" for selected answer', () => {
    const answers = wrapper.find(`[data-test='question-group']`)
    expect(answers.at(0)).toHaveClassName("answers selected")
  })

  test('Should call setSelectedAnswer on click', () => {
    const answers = wrapper.find(`[data-test='question-group']`)
    const event = {target:{id: 0}};
    answers.at(0).simulate("click", event);

    expect(setSelectedAnswer).toBeCalled();
  })
})