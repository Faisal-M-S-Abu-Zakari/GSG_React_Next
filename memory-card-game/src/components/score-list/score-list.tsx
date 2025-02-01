/* eslint-disable @typescript-eslint/no-unused-vars */
import { IScore } from "../../types/@types"

interface IProps {
  scores: IScore[];
}
const ScoreList = (props: IProps) => {
  return (
    <ul>
      {
        props.scores.map((score, index) => (
          <li key={score.playerName + index}>
            <b>Name: </b>{score.playerName}
            | <b>Level: </b>{Array.from({ length: score.level / 2 }).map(_ => '⭐')}
            | <b>Time: </b>{score.finishTime}
            | <b>Wrong Moves: </b>{score.wrongMoves}
          </li>
        )
        )
      }
    </ul>
  )
}

export default ScoreList;