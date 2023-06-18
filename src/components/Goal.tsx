import type { Todo, Goal } from '@prisma/client'

import Grid from './Grid'
import TodoCell from './Todo'

type Props = Goal & { todos: Todo[] }

export default function GoalCell(props: Props) {
  return (
    <div>
      <h2 className="sr-only">{props.content}</h2>
      <Grid
        center={{ color: props.color || 'tomato', content: props.content }}
        items={props.todos}
        renderItem={(todo) => <TodoCell {...todo} />}
      />
    </div>
  )
}
