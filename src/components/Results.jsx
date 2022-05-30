import Result from "./Result"

const Results = ({ results }) => {
	const content = results.query.pages

	const arr = []

	Object.keys(content).forEach(key => {
		arr.push(content[key])
	})

	return (
		<div className="results">
			{ arr.map(topic => {
				return (
					<Result 
						key={ topic.pageid }
						title={ topic.title } 
						desc={ topic.extract } 
						url={'https://en.wikipedia.org/?curid=' + topic.pageid} 
					/>
				)
			}) }
		</div>
	)
}

export default Results