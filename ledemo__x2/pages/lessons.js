import {lessons} from '../data/t.js'
import {be, love, helper} from '../data/be.js'
import App from './app.js'
import {Popup} from '../components/popup.js'

export default class Lessons extends App {

	randExp = {}
	popupTime

	constructor(rootDir = '') {
		super('lessons')
		this.lesson = this.lesettings['lessons'].select
		this.rootDir = rootDir
	}

	createElement() {
		let h = `
		<div class="select_level">
			<div><label for="levels">select lesson:</label></div>
			<select id="levels" class="w-100 custom-select selectlesson">`
			lessons.forEach((l, index) => {
				h += `<option${index === this.lesson ? ' selected' : ''}>${l.title}</option>`
			})	
			h += `</select>
		</div>
		<div class="main_content text-center pt-5">
			${this.getAudioBtn()}
		</div>
		<div>
			<p class="word" id="word"></p>
			<input type="text" id="translate" class="translate form-control mb-4 answeroption" placeholder="...">
		</div>
		<div class="d-flex align-items-center justify-content-between">
			<div class="helpme" title="">?</div>
			<div class="count"></div>
		</div>`
		document.querySelector('.container').innerHTML = this.getAppWraper('lessons', h)
		this.setLesson()
		this.setCount()
		this.setTimerInfo()
	}

	setLesson() {
		this.lesson = document.querySelector('.select_level select').options.selectedIndex
		let less = lessons[this.lesson]
		this.randExp = less.lesson[this.getRandomInt(0, less.lesson.length)]
		document.querySelector('#word').innerHTML = this.randExp.uk
		document.querySelector('.helpme').setAttribute('title', `${this.randExp.time} / ${this.randExp.type}`)
		console.log(this.randExp)
	}

	answeroption($el) {
		this.time = 0
		if ($el.value.toLocaleLowerCase().trim() === this.randExp.en.toLocaleLowerCase()) {
			$el.value = ''
			this.setCount('right')
			this.setLesson()
		} else {
			this.setCount('wrong')
			$el.classList.add('error')
			setTimeout(() => {
				$el.classList.remove('error')
			}, 2000)
		}
	}

	showHelper($el) {
		let time = this.randExp.time.toLocaleLowerCase()
		let type = this.randExp.type.toLocaleLowerCase()
		let content = '<div class="helper_rule">' + love[type][time] + '</div>'

		if (this.lesson === 2) {
			content = '<div class="helper_rule">' + be[type][time] + '</div>'
		}

		if (helper[this.lesson]) {
			content += helper[this.lesson]
		// } else if (this.lesson === ) {

		} else {
			content += helper[0]
		}

		// if (this.lesson === 3) {
		// 	content += helper[5]
		// }

		Popup.createElement(
			$el.getAttribute('title'), 
			content
		)
		this.popupTime = Popup.deleteElement()
	}

	eventListener($el, event = 'click') {
		let events = [
			'texttospeech',
			'answeroption',
			'helpme',
			'selectlesson',
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
						this.textToSpeech($el.target.closest('.' + e), this.randExp.en)
						break
					case 'helpme':
						this.showHelper($el.target)
						break
					case 'selectlesson':
						if (event === 'change') {
							this.setLesson()
							this.lesettings.lessons.select = $el.target.selectedIndex
							this.saveSettings()
						}
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
