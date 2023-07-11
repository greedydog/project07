import React from 'react'
import { Link } from 'react-router-dom'
import boardList from '../boardList.json'

const Board = () => {

  let url = "/detail/"
  return (
    <div>
      <table border="1px solid black">
        <tbody>

      {boardList.boardList.map((item, idx) => 
                <tr key={item.num}>
                  <td>{idx+1}</td>
                  <td>
                    <Link to={url+item.num}>{item.title}</Link>
                    </td>
                  <td>{item.writer}</td>
                </tr>
                 
                )}

        </tbody>
      </table>
    
    </div>
  )
}

export default Board