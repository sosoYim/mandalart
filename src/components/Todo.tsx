import type { Todo } from '@prisma/client'

{
  /* EmptyTodo => 클릭시 투두 입력 -> 내용이있고 포커스 아웃될 때 DB저장 */
}
export default function TodoCell(props: Todo) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  )
}
