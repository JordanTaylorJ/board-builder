import React from 'react'

const Results = ({boards}) => {

  return (
    <div>
        <h1>Results</h1>
        {boards.map((board) => 
        <div key={board.id}>
          <h2 >Board {board.id}</h2>
          {board.parts.map((part) => 
            <li key={part}> 
              {part}
            </li>
          )}
        </div>
        )}
    </div>
  )
}
export default Results;
