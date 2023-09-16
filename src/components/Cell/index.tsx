import { useState } from 'react'

import EmptyCell from '../EmptyCell'

export type Props = {
  color: string
  content: string
  handleComplete: () => void
  isCompleted: boolean
}

export default function Cell({
  color,
  content,
  handleComplete,
  isCompleted,
}: Props) {
  const [readOnly, setReadOnly] = useState(true)
  if (!content) return <EmptyCell />

  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-md p-2 ${
        isCompleted ? 'bg-pink-300' : 'bg-pink-100'
      }`}
      onClick={handleComplete}
      style={{ color: color }}
    >
      <input
        className="w-full p-2 read-only:bg-slate-300"
        defaultValue={content}
        readOnly={!!content && readOnly}
        onFocus={() => {
          setReadOnly((readOnly) => !readOnly)
        }}
        onBlur={() => {
          setReadOnly((readOnly) => !readOnly)
        }}
      />
    </div>
  )
}
