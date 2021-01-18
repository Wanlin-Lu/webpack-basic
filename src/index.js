import './style.css'
import './style.scss'
import { cube } from './math.js'

if (process.env.NODE_ENV === 'production') {
  console.log('Looks like we are in production mood!')
}

function component () {
	let element = document.createElement('pre')

	let [a,b] = [120,340]

	element.innerHTML = [
		'Hello webpack',
		'5 cubed is equal to ' + cube(5),
		a,
		b,
	].join('\n\n')

	return element
}

let element = component()
document.body.appendChild(element)
