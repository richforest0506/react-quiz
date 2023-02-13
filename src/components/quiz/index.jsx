import React, { useState } from 'react'
import Group from '../group'
// import Buttons from '../buttons'
import { useNavigate } from 'react-router-dom'
import Button from '../button'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [answerList, setAnswerList] = useState([])
  const navigate = useNavigate()

  const questions = [
    {
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
    {
      id: 2,
      question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
      answers: [
        {
          value: 'A',
          content: 'Look at your watch every two minutes',
          point: 1
        },
        {
          value: 'B',
          content: 'Bubble with inner anger, but keep quiet',
          point: 1
        },
        {
          value: 'C',
          content: 'Explain to other equally impatient people in the room that the doctor is always running late',
          point: 2
        },
        {
          value: 'D',
          content: 'Complain in a loud voice, while tapping your foot impatiently',
          point: 3
        }
      ]
    },
    {
      id: 3,
      question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
      answers: [
        {
          value: 'A',
          content: 'Don’t dare contradict them',
          point: 1
        },
        {
          value: 'B',
          content: 'Think that they are obviously right',
          point: 1
        },
        {
          value: 'C',
          content: 'Defend your own point of view, tooth and nail',
          point: 2
        },
        {
          value: 'D',
          content: 'Continuously interrupt your colleague',
          point: 3
        }
      ]
    },
    {
      id: 4,
      question: 'You are taking part in a guided tour of a museum. You:',
      answers: [
        {
          value: 'A',
          content: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
          point: 1
        },
        {
          value: 'B',
          content: 'Follow the group without question',
          point: 1
        },
        {
          value: 'C',
          content: 'Make sure that everyone is able to hear properly',
          point: 2
        },
        {
          value: 'D',
          content: 'Are right up the front, adding your own comments in a loud voice',
          point: 3
        }
      ]
    },
    {
      id: 5,
      question: 'During dinner parties at your home, you have a hard time with people who:',
      answers: [
        {
          value: 'A',
          content: 'Ask you to tell a story in front of everyone else',
          point: 1
        },
        {
          value: 'B',
          content: 'Talk privately between themselves',
          point: 1
        },
        {
          value: 'C',
          content: 'Hang around you all evening',
          introvertPoint: 1,
          point: 2
        },
        {
          value: 'D',
          content: 'Always drag the conversation back to themselves',
          point: 3
        }
      ]
    },
    {
      id: 6,
      question: 'You crack a joke at work, but nobody seems to have noticed. You:',
      answers: [
        {
          value: 'A',
          content: 'Think it’s for the best — it was a lame joke anyway',
          point: 1
        },
        {
          value: 'B',
          content: 'Wait to share it with your friends after work',
          introvertPoint: 2,
          point: 1
        },
        {
          value: 'C',
          content: 'Try again a bit later with one of your colleagues',
          point: 2
        },
        {
          value: 'D',
          content: 'Keep telling it until they pay attention',
          point: 3
        }
      ]
    },
    {
      id: 7,
      question: 'This morning, your agenda seems to be free. You:',
      answers: [
        {
          value: 'A',
          content: 'Know that somebody will find a reason to come and bother you',
          point: 1
        },
        {
          value: 'B',
          content: 'Heave a sigh of relief and look forward to a day without stress',
          point: 1
        },
        {
          value: 'C',
          content: 'Question your colleagues about a project that’s been worrying you',
          point: 2
        },
        {
          value: 'D',
          content: 'Pick up the phone and start filling up your agenda with meetings',
          point: 3
        }
      ]
    },
    {
      id: 8,
      question: 'During dinner, the discussion moves to a subject about which you know nothing at all. You:',
      answers: [
        {
          value: 'A',
          content: 'Don’t dare show that you don’t know anything about the subject',
          point: 1
        },
        {
          value: 'B',
          content: 'Barely follow the discussion',
          point: 1
        },
        {
          value: 'C',
          content: 'Ask lots of questions to learn more about it',
          point: 2
        },
        {
          value: 'D',
          content: 'Change the subject of discussion',
          point: 3
        }
      ]
    },
    {
      id: 9,
      question: 'You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:',
      answers: [
        {
          value: 'A',
          content: 'Notice that they’re alone, but don’t go over to talk with them',
          point: 1
        },
        {
          value: 'B',
          content: 'Go and have a chat with them',
          point: 1
        },
        {
          value: 'C',
          content: 'Shoot some friendly smiles in their direction',
          point: 2
        },
        {
          value: 'D',
          content: 'Hardly notice them at all',
          point: 3
        }
      ]
    },
    {
      id: 10,
      question: 'At work, somebody asks for your help for the hundredth time. You:',
      answers: [
        {
          value: 'A',
          content: 'Give them a hand, as usual',
          introvertPoint: 3,
          point: 1
        },
        {
          value: 'B',
          content: 'Accept — you’re known for being helpful',
          point: 1
        },
        {
          value: 'C',
          content: 'Ask them, please, to find somebody else for a change',
          point: 2
        },
        {
          value: 'D',
          content: 'Loudly make it known that you’re annoyed',
          introvertPoint: 0,
          point: 3
        }
      ]
    },
    {
      id: 11,
      question: 'You’ve been see a movie with your family and the reviews are mixed. You:',
      answers: [
        {
          value: 'A',
          content: 'Don’t share your point of view with anyone',
          point: 1
        },
        {
          value: 'B',
          content: 'Didn’t like the film, but keep your views to yourself when asked',
          point: 1
        },
        {
          value: 'C',
          content: 'State your point of view with enthusiasm',
          point: 2
        },
        {
          value: 'D',
          content: 'Try to bring the others round to your point of view',
          point: 3
        }
      ]
    },
    {
      id: 12,
      question: 'A friend arrives late for your meeting. You:',
      answers: [
        {
          value: 'A',
          content: 'Say, ‘It’s not a problem,’ even if that’s not what you really think',
          point: 1
        },
        {
          value: 'B',
          content: 'Give them a filthy look and sulk for the rest of the evening',
          point: 1
        },
        {
          value: 'C',
          content: 'Tell them, ‘You’re too much! Have you seen the time?’',
          point: 2
        },
        {
          value: 'D',
          content: 'Make a scene in front of everyone',
          point: 3
        }
      ]
    },
    {
      id: 13,
      question: 'You can’t find your car keys. You:',
      answers: [
        {
          value: 'A',
          content: 'Don’t want anyone to find out, so you take the bus instead',
          point: 1
        },
        {
          value: 'B',
          content: 'Panic and search madly without asking anyone for help',
          point: 1
        },
        {
          value: 'C',
          content: 'Grumble without telling your family why you’re in a bad mood',
          point: 2
        },
        {
          value: 'D',
          content: 'Accuse those around you for misplacing them',
          point: 3
        }
      ]
    },
    {
      id: 14,
      question: 'It’s time for your annual appraisal with your boss. You:',
      answers: [
        {
          value: 'A',
          content: 'Go with great hesitation as these sessions are torture for you',
          point: 1
        },
        {
          value: 'B',
          content: 'Look forward to hearing what your boss thinks about you and expects from you',
          point: 1
        },
        {
          value: 'C',
          content: 'Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting',
          point: 2
        },
        {
          value: 'D',
          content: 'Go along unprepared as you are confident and like improvising',
          point: 3
        }
      ]
    }
  ]

  const mostFrequent = (arr) => {
    const n = arr.length
    // Insert all elements in hash.
    const hash = new Map()
    for (let i = 0; i < n; i++) {
      if (hash.has(arr[i])) { hash.set(arr[i], hash.get(arr[i]) + 1) } else { hash.set(arr[i], 1) }
    }

    // find the max frequency
    let maxCount = 0; let res = -1
    hash.forEach((value, key) => {
      if (maxCount < value) {
        res = key
        maxCount = value
      }
    })

    return res
  }

  const calculateResult = () => {
    // implement calculation logic
    const result = mostFrequent(answerList)
    navigate('/result', { state: { result } })
  }

  const onClickNext = () => {
    // when user reached the last question, then go to calculation page
    if (activeQuestion === questions.length - 1) {
      calculateResult()
    } else {
      const currentList = answerList
      currentList[activeQuestion] = selectedAnswer
      // if user already answered, then recover it
      if (currentList[activeQuestion + 1]) setSelectedAnswer(currentList[activeQuestion + 1])
      // else, set it as -1
      else setSelectedAnswer(-1)
      // save answer
      setAnswerList(currentList)
      // show next question
      setActiveQuestion(activeQuestion + 1)
    }
    console.log('activeQuestion === 0', activeQuestion === 0)
  }
  const onClickPrev = () => {
    // doing nothing when there is no previous question
    if (activeQuestion > 0) {
      // show saved answer
      setSelectedAnswer(answerList[activeQuestion - 1])
      // show prev question
      setActiveQuestion(activeQuestion - 1)
    }
  }

  return <div>
    <Group question={questions[activeQuestion]} length={questions.length} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} ></Group>
    <div className='button-wrapper'>
      {!(activeQuestion === 0) && <Button className='prev' onClick={onClickPrev} label='&lt; Previous' disabled={false} />}
      <Button className={`next ${selectedAnswer < 0 ? 'disabled' : ''} ${activeQuestion === questions.length - 1 ? 'end' : ''}`} disabled={selectedAnswer < 0} onClick={onClickNext} label={`${activeQuestion === questions.length - 1 ? 'Finish test' : 'Next'} >`} />
    </div>
  </div>
}

export default Quiz
