import type { Goal, Mandalart, Todo } from '@prisma/client'

import GoalComponent from './Goal'
import Grid from './Grid'

type IdeaProps = {
  center: { content: string; color?: string }
  goals: (Goal & { todos: Todo[] })[]
}

function Idea({ center, goals }: IdeaProps) {
  return (
    <Grid
      items={goals}
      renderItem={(goal) => <GoalComponent {...goal} />}
      center={center}
    />
  )
}

type MandalartProps = {
  mandalart: Mandalart & { goals: (Goal & { todos: Todo[] })[] }
}

function Mandalart({ mandalart }: MandalartProps) {
  return (
    <div>
      <h1 className="text-[pink]">{mandalart.content}</h1>
      <Idea
        center={{ color: mandalart.color, content: mandalart.content }}
        goals={mandalart.goals}
      />
    </div>
  )
}

export default Mandalart
