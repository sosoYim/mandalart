import { useEffect, useRef, useState } from 'react'

export default function EmptyCell() {
  const [editable, setEditable] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus()
    }
  }, [editable])

  const saveCell = (content?: string) => {
    if (content) console.log(content, '입력 저장~(하는 척)')
    setEditable(false)
  }

  return (
    <div
      onClick={() => !editable && setEditable(true)}
      onKeyDown={(e) => {
        if (!editable) {
          return setEditable(true)
        }

        if (e.code === 'Enter') {
          saveCell(inputRef.current?.value)
        }
      }}
      className="flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-600 focus-within:border-2 focus-within:border-solid focus-within:border-blue-500"
    >
      <div className={`${editable ? 'sr-only' : ''}`}>empty</div>
      <input
        ref={inputRef}
        className={`${
          editable ? '' : 'sr-only'
        } w-full p-2 read-only:bg-slate-300`}
        placeholder="추가할 내용을 적으세요."
        onBlur={() => setEditable(false)}
      />
    </div>
  )
}
