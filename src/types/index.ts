export type Movie = {
  id: string
  title: string
  poster: string
  overview: string
  release_date: number
  genres: string[]
}

export interface MovieItemProps {
  movie: Movie
  onAddClick: (movie: Movie) => void
  mode: 'add' | 'remove'
}
