import type { Goal, Mandalart, Todo } from '@prisma/client'

import EmptyBoard from '../EmptyBoard'
import GoalBoard from '../GoalBoard'
import Grid from '../Grid'
import IdeaBoard from '../IdeaBoard'

type Props = {
  mandalart: Mandalart & { goals: (Goal & { todos: Todo[] })[] }
}

function Mandalart({ mandalart }: Props) {
  return (
    <Grid
      items={mandalart.goals}
      renderCell={(goal) => (goal ? <GoalBoard {...goal} /> : <EmptyBoard />)}
      center={
        <IdeaBoard
          center={{ color: mandalart.color, content: mandalart.content }}
          goals={mandalart.goals}
        />
      }
    />
  )
}

export default Mandalart
