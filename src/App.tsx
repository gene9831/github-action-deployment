import './App.css'
import { Table } from './components/Table'

function App() {
  return (
    <div>
      <header className="h-16 border-b-[1px] border-gray-300 bg-gray-100"></header>
      <main className="px-6 py-4">
        <div className="m-auto max-w-6xl">
          <Table />
        </div>
      </main>
    </div>
  )
}

export default App
