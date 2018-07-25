const dayList = ['First Day','Second Day','Third Day','Fourth Day','Fifth Day','Sixth Day','Seventh Day','Eighth Day','Ninth Day','Tenth Day','Eleventh Day','Twelfth Day']
const giftsList = ['a Partridge in a pear tree','Two Turtle Doves','Three french hens','Four Calling Birds','Five Golden Rings','Six geese a laying','Seven swams a singing','Eight Maids a Milking','Nine Ladies Dancing','Ten Lords a Leaping','Eleven Pipers Piping','Twelve Drummers Drumming']

let day = 1;
let memory = giftsList[0];

function nextDay() {
	let dayMessageContainer = $('#dayMessageContainer')
	let giftMessageContainer = $('#giftMessageContainer')

	if (day < 12) {

		// if (day === 1) memory =  giftsList[day] + ", " + memory
		memory =  giftsList[day] + ", and " + memory

		console.log(day)
		
		let newDay = document.createElement("p")
		let newDayMessage = document.createTextNode("ON THE " + dayList[day] + " OF CHRISTMAS MY TRUE LOVE SENT TO ME " + memory)

		newDay.appendChild(newDayMessage)
		let container = document.getElementById('container')
		container.appendChild(newDay);

		day++;
	}
	else {
		let button = $("#next")
		button.addClass("disabled")
	}
}