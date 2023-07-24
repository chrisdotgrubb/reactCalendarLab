function handleDayClick(e, category) {
	if (category === '') return
	const target = e.currentTarget
	if (target.classList.contains(category)) {
		target.classList.remove(category)
	} else {
		target.className = 'day'
		target.classList.add(category)
	}
}

export default function Day({date, dayOfWeek, category}) {
	return (
		<div
			className={'day'}
			onClick={(e) => {
				handleDayClick(e, category)
			}}>
			<div> {dayOfWeek}</div>
			<div> {date} </div>
		</div>
	)
}