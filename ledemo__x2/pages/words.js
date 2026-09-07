import {w} from '../data/w2.js'
import App from './app.js'

export default class Word extends App {

	word = 0
	words = []
	disable = false
	
	constructor(rootDir = '') {
		super('words')
		this.activeLang = this.lesettings.words.lang || 'uk'
		this.rootDir = rootDir
	}

	createElement() {
		let h = `
		<div class="text-center mb-5">${this.getAudioBtn()}</div>
		<div id="word" class="word_w mb-5 text-center"></div>
		<div class="answer_options mb-4"></div>
		<div class="d-flex align-items-center justify-content-between px-3">
			<div class="change_lang changelang d-flex align-items-center justify-content-center">
				<div class="flag__container">
					<img src="${this.rootDir}/assets/images/${(this.activeLang === 'uk') ? 'uk' : 'favicon'}.png">
				</div>
				<span class="mx-2"> to </span>
				<div class="flag__container">
					<img src="${this.rootDir}/assets/images/${(this.activeLang !== 'uk') ? 'uk' : 'favicon'}.png">
				</div>
			</div>
			<div class="count"></div>
		</div>`
		document.querySelector('.container').innerHTML = this.getAppWraper('words', h, 'pt-5')
		this.setWords()
		this.setCount()
		this.setTimerInfo()
	}

	getWords(limit = 3) {
		this.word = this.getRandomInt(0, limit)
		for (let i = 0; i < limit; i++) {
			this.words.push(w[this.getRandomInt(0, w.length)])
		}
	}

	setWords() {
		this.getWords()
		const mainWord = this.words[this.word]
		document.querySelector('#word').innerHTML = mainWord[this.activeLang]
		let answer_options = ''
		for (let i = 0; i < 3; i++) {
			answer_options += `<div data-option="${i}" class="answer_option option_${i} answeroption">
				${this.words[i][(this.activeLang !== 'uk') ? 'uk' : 'en']}
			</div>`
		}
		document.querySelector('.answer_options').innerHTML = answer_options
		console.log(mainWord)
	}

	answeroption(option) {
		this.disable = true
		this.time = 0
		let time = 1000
		document.querySelector('.option_' + this.word).classList.add('success')
		if (Number(option.dataset.option) === this.word) {
			this.setCount('right')

		} else {
			time = 3000
			this.setCount('wrong')
			option.classList.add('error')
		}
		this.words = []
		setTimeout(() => {
			this.setWords()
			this.disable = false
		}, time)
	}

	changelang($el) {

		$el.classList.toggle('change')
		this.activeLang = (this.lesettings.words.lang === 'en') ? 'uk' : 'en'
		this.setWords()
		this.lesettings.words.lang = this.activeLang
		this.saveSettings()
	}

	eventListener($el, event = 'click') {
		let events = [
			'texttospeech',
			'changelang',
			'answeroption',
			'count'
		]
		events.forEach(e => {
			if ($el.target.closest('.' + e)) {
				switch(e) {
					case 'answeroption':
						if (!this.disable) {
							this.answeroption($el.target)
						}
						break
					case 'texttospeech':
						this.textToSpeech($el.target.closest('.' + e), this.words[this.word].en)
						break
					case 'changelang':
						this.changelang($el.target.closest('.' + e))
						break
					case 'count':
						this.setCount('', true)
				}
			}
		})
	}
}
