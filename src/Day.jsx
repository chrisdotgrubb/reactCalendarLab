export default function Day({date, dayOfWeek}) {
	return (
		<div className={'day'}>
			<div>{dayOfWeek}</div>
			<div>{date}</div>
		</div>
	)
}