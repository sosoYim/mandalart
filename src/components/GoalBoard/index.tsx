import { type Goal, type Todo } from '@prisma/client'

import EmptyCell from '../EmptyCell'
import GoalCell from '../GoalCell'
import Grid from '../Grid'
import TodoCell from '../TodoCell'

type Props = Goal & { todos: Todo[] }

export default function GoalBoard(props: Props) {
  return (
    <div>
      <h2 className="sr-only">{props.content}</h2>
      <Grid
        center={
          <GoalCell
            color={props.color || ''}
            content={props.content}
            isCompleted={props.isCompleted}
            handleComplete={() => {
              console.log('complete')
            }}
          />
        }
        items={props.todos}
        renderCell={(todo) =>
          todo ? (
            <TodoCell
              color={props.color || ''}
              content={todo.content}
              isCompleted={todo.isCompleted}
              handleComplete={() => {
                console.log('completed todo')
              }}
            />
          ) : (
            <EmptyCell />
          )
        }
      />
    </div>
  )
}
