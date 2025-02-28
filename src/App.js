import { useState } from 'react'
import Puzzles from './components/Puzzles'
import SliderPuzzle from './components/SliderPuzzle'

function App() {
  const [selectedPuzzleId, setSelectedPuzzleId] = useState('')
  function puzzleChanged(id){
    setSelectedPuzzleId(() => id)
  }
  return (
    <>
      <Puzzles selectPuzzle={puzzleChanged}/>
      <SliderPuzzle puzzleId={selectedPuzzleId}/>
    </>
  )
}

export default App
