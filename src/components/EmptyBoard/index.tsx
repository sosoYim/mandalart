import EmptyCell from '../EmptyCell'
import Grid from '../Grid'

export default function EmptyBoard() {
  return (
    <Grid
      className="h-full w-full"
      items={[
        { order: 1 },
        { order: 2 },
        { order: 3 },
        { order: 4 },
        { order: 5 },
        { order: 6 },
        { order: 7 },
        { order: 8 },
      ]}
      renderCell={() => <EmptyCell />}
      center={<EmptyCell />}
    />
  )
}
