import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'
import { runs } from './components/data-runs'

function App() {
  const [names] = useState(['Build', 'Lint'])
  const [activeName, setActiveName] = useState('')

  return (
    <>
      <div className="h-[104px]"></div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: '336px minmax(0, calc(100% - 336px - 0px))',
          gridTemplateRows: '1fr',
          height: 'calc(-104px + 100vh)',
        }}
      >
        <Sidebar
          names={names}
          active={activeName}
          onClick={(name) => setActiveName(name)}
        ></Sidebar>
        <Table runs={runs}></Table>
      </div>
    </>
  )
}

export default App
