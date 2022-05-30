import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Form = ({ setSearch }) => {
	const [input, setInput] = useState('')

	const handleInput = e => {
		setInput(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		setSearch(input)
		setInput('')
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input value={ input } onChange={ handleInput } type="text" placeholder="Search..." />

			<button type="submit"><FontAwesomeIcon icon={ faSearch } size='lg' /></button>
		</form>
	)
}

export default Form