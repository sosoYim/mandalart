import { type Goal, type Todo } from '@prisma/client'

import EmptyCell from '../EmptyCell'
import GoalCell from '../GoalCell'
import Grid from '../Grid'
import IdeaCell from '../IdeaCell'

type Props = {
  center: { content: string; color?: string }
  goals: (Goal & { todos: Todo[] })[]
}

export default function IdeaBoard({ center, goals }: Props) {
  return (
    <Grid
      items={goals}
      renderCell={(goal) =>
        goal ? (
          <GoalCell
            {...goal}
            color=""
            handleComplete={() => {
              console.log('goal completed')
            }}
          />
        ) : (
          <EmptyCell />
        )
      }
      center={
        <IdeaCell
          color={center.color || ''}
          content={center.content}
          isCompleted={false}
          handleComplete={() => {
            console.log('mandalart completed')
          }}
        />
      }
    />
  )
}
