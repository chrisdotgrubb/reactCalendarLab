import "./App.css";


export default function App() {
	
	const days = [
		{
			name: "Sunday"
		},
		{
			name: "Monday"
		},
		{
			name: "Tuesday"
		},
		{
			name: "Wednesday"
		},
		{
			name: "Thursday"
		},
		{
			name: "Friday"
		},
		{
			name: "Saturday"
		},
	]
	
	// The following creates an array of numbers from [1..28]
	const dates = Array.from({length: 28}, (x, i) => i + 1)
	
	function getDayOfWeek(i) {
				while ((i !== 6) && (Math.floor(i / 6))) {
					i -= 7;
				}
				return days[i].name;
			}
			
	const allDays = dates.map((d) => {
			const dayOfWeek = getDayOfWeek(d - 1)
			return (
				<h6>{d} {dayOfWeek}</h6>
			)
		}
	)
	
	return (
		<div className="App">
			<h1>React Calendar</h1>
			<div className={'calendar'}>
				{allDays}
			</div>
		</div>
	);
}