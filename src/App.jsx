import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>


    </>
  )
}

export default App
