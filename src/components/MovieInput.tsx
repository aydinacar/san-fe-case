interface MovieInputProps {
  search: string
  setSearch: (search: string) => void
}

const MovieInput = ({ search, setSearch }: MovieInputProps) => {
  return (
    <div>
      <input
        placeholder="Type for searcing..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default MovieInput
