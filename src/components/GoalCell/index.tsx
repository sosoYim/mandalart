import Cell, { type Props as CellProps } from '../Cell'

export default function GoalCell({
  color = '',
  content,
  handleComplete,
  isCompleted,
}: CellProps) {
  // TODO: 기타 골에서만 적용할 액션 혹은 스타일

  return (
    <Cell
      color={color}
      content={content}
      isCompleted={isCompleted}
      handleComplete={handleComplete}
    />
  )
}
