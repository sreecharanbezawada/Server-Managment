// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import './index.css'

function DashboardPage() {
  const [statisticsData, setStatisticsData] = useState({})
  const [serverLoadData, setServerLoadData] = useState([])

  useEffect(() => {
    // Fetch statistics data
    fetch('/api/statistics')
      .then(response => response.json())
      .then(data => setStatisticsData(data))
      .catch(error => console.error(error))

    // Fetch server load data
    fetch('/api/server-load')
      .then(response => response.json())
      .then(data => setServerLoadData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <section>
        <h2>Statistics</h2>
        <Statistics data={statisticsData} />
      </section>
      <section className="server-load-section">
        <h2>Server Load</h2>
        <ServerLoadGraph data={serverLoadData} />
        <ActivityLogs />
      </section>
    </div>
  )
}

export default DashboardPage
