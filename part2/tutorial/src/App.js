import Note from './compon../../../part0/tutorial/node_modules/@types/react/ts5.0Note'

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App