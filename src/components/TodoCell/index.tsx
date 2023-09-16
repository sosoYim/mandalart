import Cell, { type Props } from '../Cell'

export default function TodoCell({
  color = '',
  content,
  handleComplete,
  isCompleted,
}: Props) {
  // TODO: 기타 투두에서만 적용할 액션 혹은 스타일

  return (
    <Cell
      color={color}
      content={content}
      isCompleted={isCompleted}
      handleComplete={handleComplete}
    />
  )
}
