const Result = ({ title, desc, url }) => {
	return (
		<div className="result">
			<h3>{ title }</h3>

			<p>{ desc }</p>

			<a href={url}>Read more</a>
		</div>
	)
}

export default Result