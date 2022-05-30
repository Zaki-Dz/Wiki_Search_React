import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Logo"
import Form from "./components/Form"
import Results from "./components/Results"
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResutls] = useState()
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const endpoint = 'https://en.wikipedia.org/w/api.php?'

    const params = {
      origin: '*',
      format: 'json',
      action: 'query',
      prop: 'extracts',
      exchars: 250,
      exintro: true,
      explaintext: true,
      generator: 'search',
      gsrlimit: 20
    }

    params.gsrsearch = search

    const { data } = await axios.get(endpoint, { params })

    setResutls(data)
    setLoading(false)
  }

  useEffect(() => {
    if (search.length > 0) {
      getData()
    }
  }, [search])

  return (
    <div className="app">
      <Header />

      <Form setSearch={ setSearch } />

      { search.length == 0 ? '' : loading == true ? <FontAwesomeIcon icon={ faSpinner } size='lg' spin /> : <Results results={ results } /> }

    </div>
  )
}

export default App
