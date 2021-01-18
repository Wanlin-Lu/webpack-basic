// import _ from 'lodash'
import PMe from './print.js'
import './style.css'
import { cube } from './math.js'

if (process.env.NODE_ENV === 'production') {
	console.log('Looks like we are in production mood!')
}

/*function component() {
	var element = document.createElement('div')
	var btn = document.createElement('button')

	element.innerHTML = _.join(['hello','webpack!'],' ');

	btn.textContent = 'Click me check the console'
	btn.onclick = PMe

	element.appendChild(btn)

	return element
}*/
function component () {
	var element = document.createElement('pre')

	element.innerHTML = [
		'Hello webpack',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n')

	return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
	module.hot.accept('./print.js',function() {
		console.log('Accept the updated printMe module!')
		document.body.removeChild(element)
		element = component()
		document.body.appendChild(element)
	})
}