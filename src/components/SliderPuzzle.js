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
  const [shuffledPuzzleArray, setShuffledPuzzleArray] = useState([...correctPuzzleArray].sort(
      () => Math.random() - 0.5
    ))

  return (
    <div>
      <h1>Swap the Images to Win</h1>
      <div className="row">
        {
          shuffledPuzzleArray.map((s, index) => {
            return (
              <div className="column" key={index}>
                <img src={`assets/${puzzleId}/${s}`} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SliderPuzzle
