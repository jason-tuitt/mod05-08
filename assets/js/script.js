const dayList = ['First Day','Second Day','Third Day','Fourth Day','Fifth Day','Sixth Day','Seventh Day','Eighth Day','Ninth Day','Tenth Day','Eleventh Day','Twelfth Day']
const giftsList = ['Partridge in a pear tree','Two Turtle Doves','Three french hens','Four Calling Birds','Five Golden Rings','Six geese a laying','Seven swams a singing','Eight Maids a Milking','Nine Ladies Dancing','Ten Lords a Leaping','Eleven Pipers Piping','Twelve Drummers Drumming']

let day = 1;
let dayMessage;

function nextDay() {
	let dayMessageContainer = $('#dayMessageContainer')
	let giftMessageContainer = $('#giftMessageContainer')

	if (day < 12) {

		let newDay = document.createElement("p")
		let newGiftDay = document.createElement("p") 
		let newDayMessage = document.createTextNode("ON THE "+ dayList[day] + " OF CHRISTMAS MY TRUE LOVE GAVE TO ME")
		let newGiftsMessage = document.createTextNode(giftsList[day])
		newDay.appendChild(newDayMessage)
		newGiftDay.appendChild(newGiftsMessage)

		let container = document.getElementById('container')
		container.appendChild(newDay);
		container.appendChild(newGiftDay);
		// console.log(dayList[day]);
		// console.log(giftsList[day]);
		// dayMessageContainer.text(dayList[day])
		// giftMessageContainer.text(giftsList[day])
		day++;
	}
	else {
		let button = $("#next")
		button.addClass("disabled")
	}
}