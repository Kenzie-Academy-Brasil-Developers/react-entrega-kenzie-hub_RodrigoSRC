import { useState } from 'react'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/global'
import { GlobalReset } from './styles/reset'

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className='App'>
      <GlobalReset />
      <GlobalStyles />

      <RoutesMain setUser={setUser} user={user}/>
    </div>
  )
}

export default App