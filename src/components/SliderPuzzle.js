import { useState } from 'react'
import moment from 'moment'
import './SliderPuzzle.css'

function SliderPuzzle({ puzzleId = 'cut-pink' }) {
  const correctPuzzleArray = [
    'image_part_001.jpg',
    'image_part_002.jpg',
    'image_part_003.jpg',
    'image_part_004.jpg',
    'image_part_005.jpg',
    'image_part_006.jpg',
    'image_part_007.jpg',
    'image_part_008.jpg',
    'image_part_009.jpg',
  ]
  const [shuffledPuzzleArray, setShuffledPuzzleArray] = useState(
    [...correctPuzzleArray].sort(() => Math.random() - 0.5)
  )
  const [timer, setTimer] = useState(null)
  const [indexesToSwap, setIndexesToSwap] = useState([])

  const [startDateTime, setStartDateTime] = useState(new Date())
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [elapsedDiff, setElapsedDiff] = useState(moment(new Date))
  const [elapsedTime, setElapsedTime] = useState('')

  function swap(index) {
    // if (!timer) {
    //   return;
    // }
    let its = []
    let spa = []
    if (indexesToSwap.length < 2) {
      its = [...indexesToSwap, index]
    }
    if (its.length === 2) {
      const [index1, index2] = its
      spa = [...shuffledPuzzleArray]
      const tmp = spa[index1]
      spa[index1] = spa[index2]
      spa[index2] = tmp
      setShuffledPuzzleArray(() => [...spa])
      setIndexesToSwap(() => [])
    } else {
      setIndexesToSwap(() => [...its])
    }
  }

  function resetTime() {
    setStartDateTime(new Date())
    setCurrentDateTime(new Date())
  }

  function start() {
    resetTime();
    setShuffledPuzzleArray(() => [...correctPuzzleArray].sort(
      () => Math.random() - 0.5
    ))
    setIndexesToSwap([])
    const timer = setInterval(() => {
      const currentDT = moment(new Date());
      const startDT = moment(startDateTime);
      const diff = currentDT.diff(startDT);
      const elapsedT = moment.utc(diff).format("HH:mm:ss")
      setElapsedTime(() => elapsedT)
      // if (this.isWinning) {
      //   this.recordSpeedRecords();
      //   this.stop();
      // }
    }, 1000);
    setTimer(() => timer)
  }

  return (
    <div>
      <h1>Swap the Images to Win</h1>
      <button onClick={start} id="start-button">Start Game</button>
      <p>Elapsed Time: { elapsedTime }</p>
      <div className='row'>
        {shuffledPuzzleArray.map((s, index) => {
          return (
            <div className='column' key={index} onClick={() => swap(index)}>
              <img src={`assets/${puzzleId}/${s}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SliderPuzzle
