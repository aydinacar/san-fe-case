import { MovieItemProps } from '../types'
import { differenceInDays, fromUnixTime } from 'date-fns'
import useMouseEvent from '../hooks/useMouseEvent'

const MovieItem = ({ movie, onAddClick, mode }: MovieItemProps) => {
  const { color, el } = useMouseEvent(mode)

  return (
    <div
      className="movie-item"
      ref={el}
      id="movie"
      style={{ backgroundColor: color }}
    >
      <div id="movie-title">{movie.title}</div>
      <div>Release date: {differenceInDays(new Date(), fromUnixTime(movie.release_date))} days ago</div>
      <button
        style={{
          backgroundColor: mode === 'add' ? '#4CAF50' : '#f44336'
        }}
        id={mode === 'add' ? 'add-button' : 'add-remove'}
        onClick={() => onAddClick(movie)}
      >
        {mode === 'add' ? 'Add' : 'Remove'}
      </button>
    </div>
  )
}

export default MovieItem
