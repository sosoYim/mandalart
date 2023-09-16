import Cell, { type Props as CellProps } from '../Cell'

export default function IdeaCell({
  color = '',
  content,
  handleComplete,
  isCompleted,
}: CellProps) {
  return (
    <Cell
      color={color}
      content={content}
      isCompleted={isCompleted}
      handleComplete={handleComplete}
    />
  )
}
