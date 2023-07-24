import "./App.css";
import Day from "./Day";
import {useState} from "react";


export default function App() {
	const [selectedCategory, setSelectedCategory] = useState('');
	
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
	
	function handleCategoryClick(e) {
		setSelectedCategory(e.target.id)
	}
	
	const allDays = dates.map(d => {
		const dayOfWeek = getDayOfWeek(d - 1)
		return <Day date={d} dayOfWeek={dayOfWeek} key={d} category={selectedCategory}/>
	})
	
	const categories = ['holiday', 'work', 'errands', 'sick'];
	const allCategories = categories.map((cat, idx) => {
		return (
			<div
				id={cat}
				className={`category ${cat}`}
				key={idx}
				onClick={handleCategoryClick}
			>
				{cat}
			</div>
		)
	});
	
	return (
		<div className="App">
			<h1>React Calendar</h1>
			<div className={'categories'}>
				{allCategories}
			</div>
			<div className={'calendar'}>
				{allDays}
			</div>
		</div>
	);
}