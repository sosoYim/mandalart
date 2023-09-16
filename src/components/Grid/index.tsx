import { type ReactNode } from 'react'

import EmptyCell from '../EmptyCell'

type GridProps<T extends { order: number }> = {
  items: T[]
  renderCell: (item: T | undefined) => React.ReactNode
  center?: ReactNode | ReactNode[]
  className?: string
}

export default function Grid<T extends { order: number }>({
  center,
  className = '',
  items,
  renderCell,
}: GridProps<T>) {
  const ORDER_TO_GRID_AREA = {
    1: '1 / 1 / span 1 / span 1',
    2: '1 / 2 / span 1 / span 1',
    3: '1 / 3 / span 1 / span 1',
    4: '2 / 3 / span 1 / span 1',
    5: '3 / 3 / span 1 / span 1',
    6: '3 / 2 / span 1 / span 1',
    7: '3 / 1 / span 1 / span 1',
    8: '2 / 1 / span 1 / span 1',
  }

  const cells = Object.entries(ORDER_TO_GRID_AREA).map(([order, gridArea]) => {
    const item = items.find((item: T) => item.order === parseInt(order))

    return (
      <div
        key={`cell-${order}`}
        className="flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-300"
        style={{ gridArea }}
      >
        {renderCell(item)}
      </div>
    )
  })

  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-4 ${className}`}>
      <div
        className="flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-600"
        style={{ gridArea: '2 / 2 / span 1 / span 1' }}
      >
        {center}
      </div>
      {cells}
    </div>
  )
}
