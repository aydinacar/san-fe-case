import { useState } from 'react'
import './App.scss'
import { movies } from './movies'
import { Movie } from './types'
import MovieInput from './components/MovieInput'
import MovieItem from './components/MovieItem'
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
            <MovieItem
              mode="add"
              key={movie.id}
              movie={movie}
              onAddClick={() => onAddClick(movie)}
            />
          )
        })}
      </div>
      <div id="right-movie-container">
        {rightList.map(movie => {
          if (!movie.title.includes(search)) {
            return false
          }

          return (
            <MovieItem
              mode="remove"
              key={movie.id}
              movie={movie}
              onAddClick={() => onRemoveClick(movie)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
