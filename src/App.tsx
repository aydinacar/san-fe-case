import { differenceInDays, fromUnixTime } from 'date-fns'
import { useState } from 'react'
import './App.scss'
import { movies } from './movies'
import { Movie } from './types'
import MovieInput from './components/MovieInput'
function App() {
  const [leftList, setLeftList] = useState<Movie[]>(movies)
  const [rightList, setRightList] = useState<Movie[]>([])
  const [search, setSearch] = useState('')

  const onAddClick = (movie: Movie) => {
    rightList.push(movie)
    setRightList(rightList)

    const newLeftList = leftList.filter(item => item.id !== movie.id)
    setLeftList(newLeftList)
  }

  const onRemoveClick = (movie: Movie) => {
    leftList.push(movie)
    setLeftList(leftList)

    const newRightList = rightList.filter(item => item.id !== movie.id)
    setRightList(newRightList)
  }

  return (
    <div className="App">
      <div id="left-movie-container">
        <MovieInput
          search={search}
          setSearch={e => setSearch(e)}
        />
        {leftList.map(movie => {
          if (!movie.title.includes(search)) {
            return false
          }

          return (
            <div
              id="movie"
              style={{ width: 400, height: 100, border: '1px solid black' }}
              onMouseOver={e => {
                const el = e.currentTarget
                let l = 0
                function updateColor(newl: number) {
                  l = newl
                  el.style.backgroundColor = `#64c864${20 + l * 5}`
                  if (l < 10) {
                    setTimeout(() => updateColor(l + 1), 25)
                  }
                }
                setTimeout(() => updateColor(l + 1), 25)
              }}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#64c86420')}
            >
              <div id="movie-title">{movie.title}</div>
              <div>Release date: {differenceInDays(new Date(), fromUnixTime(movie.release_date))} days ago</div>
              <button
                id="add-button"
                onClick={() => onAddClick(movie)}
              >
                Add
              </button>
            </div>
          )
        })}
      </div>
      <div id="right-movie-container">
        {rightList.map(movie => {
          if (!movie.title.includes(search)) {
            return false
          }

          return (
            <div
              id="movie"
              style={{ width: 400, height: 100, border: '1px solid black' }}
              onMouseOver={e => {
                const el = e.currentTarget
                let l = 0
                function updateColor(newl: number) {
                  l = newl
                  el.style.backgroundColor = `#c86464${20 + l * 5}`
                  if (l < 10) {
                    setTimeout(() => updateColor(l + 1), 25)
                  }
                }
                setTimeout(() => updateColor(l + 1), 25)
              }}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c8646420')}
            >
              <div id="movie-title">{movie.title}</div>
              <div>Release date: {differenceInDays(new Date(), fromUnixTime(movie.release_date))} days ago</div>
              <button
                id="remove-button"
                onClick={() => onRemoveClick(movie)}
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
