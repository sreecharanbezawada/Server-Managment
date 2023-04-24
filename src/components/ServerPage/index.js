/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from 'react'
import ServerList from './ServerList'
import ServerDetails from './ServerDetails'
import './index.css'

function ServerPage() {
  const [filterDataCenter, setFilterDataCenter] = useState('')
  const [filterServerType, setFilterServerType] = useState('')
  const [selectedServer, setSelectedServer] = useState(null)

  // Code to fetch and update server data

  function handleServerSelect(server) {
    setSelectedServer(server)
  }

  return (
    <div className="server-page-container">
      <section className="server-filter-section">
        <label htmlFor="data-center-filter">Data Center:</label>
        <input
          id="data-center-filter"
          type="text"
          value={filterDataCenter}
          onChange={e => setFilterDataCenter(e.target.value)}
        />
        <label htmlFor="server-type-filter">Server Type:</label>
        <input
          id="server-type-filter"
          type="text"
          value={filterServerType}
          onChange={e => setFilterServerType(e.target.value)}
        />
        <button>Filter</button>
      </section>
      <section className="server-list-section">
        <ServerList
          data={serverData}
          filterDataCenter={filterDataCenter}
          filterServerType={filterServerType}
          onServerSelect={handleServerSelect}
        />
      </section>
      <section className="server-details-section">
        {selectedServer && <ServerDetails data={selectedServer} />}
      </section>
    </div>
  )
}

export default ServerPage
