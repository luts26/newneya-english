import App from './app.js'
import {Popup} from '../components/popup.js'
import {form3} from '../data/form3.js'

export default class Form3 extends App {

	word = 0
	popupTime

	constructor(rootDir = '') {
		super('form3')
		this.rootDir = rootDir
	}

	createElement() {
		let h = `
		<div class="main_content text-center pt-5">
			${this.getAudioBtn()}
		</div>
		<p class="word" id="word"></p>
		<input type="text" id="translate" class="translate form-control mb-4 answeroption" placeholder="present past">
		<div class="d-flex align-items-center justify-content-between">
			<div class="helpme" title="">?</div>
			<div class="count"></div>
		</div>
		`
		document.querySelector('.container').innerHTML = this.getAppWraper('form3', h)
		this.setForm3()
		this.setCount()
		this.setTimerInfo()
	}

	setForm3() {
		this.word = this.getRandomInt(0, form3.length)
		document.querySelector('#word').innerHTML = form3[this.word].uk
		console.log(form3[this.word])
	}

	showHelper($el) {

		let content = `
			<p>${form3[this.word].uk}: ${form3[this.word].en}</p>
			<p>${form3[this.word].uk_past}: ${form3[this.word].en_past}</p>
		`

		Popup.createElement(
			'Past / Statement', 
			content
		)
		this.popupTime = Popup.deleteElement(3000)
	}

	answeroption($el) {
		this.time = 0
		let text = form3[this.word].en + ' ' + form3[this.word].en_past
		if ($el.value.trim().toLowerCase() === text.toLowerCase()) {
			$el.value = ''
			this.setCount('right')
			this.setForm3()
		} else {
			$el.classList.add('error')
			this.setCount('wrong')
			setTimeout(() => {
				$el.classList.remove('error')
			}, 2000)
		}
	}

	eventListener($el, event = 'click') {
		let events = [
			'texttospeech',
			'helpme',
			'answeroption',
			'count',
			'helper_popup'
		]
		events.forEach(e => {
			if ($el.target.closest('.' + e)) {
				switch(e) {
					case 'answeroption':
						if (event === 'keypress')
							this.answeroption($el.target)
						break
					case 'texttospeech':
						this.textToSpeech($el.target.closest('.' + e), form3[this.word].en)
						setTimeout(() => {
							this.textToSpeech($el.target.closest('.' + e), form3[this.word].en_past)
						}, 2000)
						break
					case 'helpme':
						this.showHelper($el.target)
						break
					case 'count':
						this.setCount('', true)
						break
					case 'helper_popup':
						clearTimeout(this.popupTime)
						Popup.deleteElement(0)
				}
			}
		})
	}
}
