import './Puzzles.css'

function Puzzles(props) {
  const puzzles = [
    { id: 'cut-pink', image: 'pink.jpg', title: 'Pink Flower' },
    { id: 'cut-purple', image: 'purple.jpg', title: 'Purple Flower' },
    { id: 'cut-red', image: 'red.jpg', title: 'Red Flower' },
  ]

  return (
    <div>
      <h1>Select a Puzzle</h1>
      {puzzles.map((p) => {
        return (
          <div className='row' key={p.id}>
            <div>
              <img src={`assets/${p.image}`} alt={p.title} />
            </div>
            <div>
              <h2>{p.title}</h2>
            </div>
            <div class="play-button">
              <button onClick={() => props.selectPuzzle(p.id)}>Play</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Puzzles
