import { MovieItemProps } from '../types'
import { differenceInDays, fromUnixTime } from 'date-fns'
import useMouseEvent from '../hooks/useMouseEvent'

const MovieItem = ({ movie, onAddClick, mode }: MovieItemProps) => {
  const { color, el } = useMouseEvent(mode)

  return (
    <div
      ref={el}
      id="movie"
      style={{ width: 400, height: 100, border: '1px solid black', backgroundColor: color }}
    >
      <div id="movie-title">{movie.title}</div>
      <div>Release date: {differenceInDays(new Date(), fromUnixTime(movie.release_date))} days ago</div>
      <button
        id={mode === 'add' ? 'add-button' : 'add-remove'}
        onClick={() => onAddClick(movie)}
      >
        {mode === 'add' ? 'Add' : 'Remove'}
      </button>
    </div>
  )
}

export default MovieItem
