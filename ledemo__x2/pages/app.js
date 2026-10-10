import {lesettings1} from '../data/settings.js'

export default class App {

	time = 0
	timer
	rootDir
	count = {right:0,wrong:0,count:0}
	lesettings = {
		lessons:{select:0,right:0,wrong:0,count:0,time:0},
		words:{lang:'uk',right:0,wrong:0,count:0,time:0},
		form3:{right:0,wrong:0,count:0,time:0}
	}

	constructor(main = 'lessons') {

		this.main = main
		this.lesettings = lesettings1
		if (window.localStorage.getItem('le-sett')) {
			this.lesettings = JSON.parse(window.localStorage.getItem('le-sett'))
		}
	}

	getRandomInt(min, max) {

		return Math.floor(Math.random() * (max - min) + min)
	}

	setCount(type = '', clear = false) {
		this.count = this.lesettings[this.main]

		if (type !== '' && !clear) {
			this.count[type]++
			if (type === 'right')
				this.count.count++
		} else if (clear) {
			this.count.right = 0
			this.count.wrong = 0
		}

		document.querySelector('.count').innerHTML = `
			<span class="done">${this.count.right}</span>
			/
			<span class="error">${this.count.wrong}</span>
		`
		this.lesettings[this.main] = {...this.lesettings[this.main], ...this.count}
		let htmlCount = document.querySelector('.traning_bl__info_count span')
		let cls = 'time'

		if (this.count.count > 0) {

			if ((this.count.count % 50) === 0)
				cls += '_success'
			if ((this.count.count % 100) === 0)
				cls = 'time_danger'
			if ((this.count.count % 10) === 0) {
				htmlCount.classList.add(cls)
				setTimeout(() => {
					htmlCount.classList.remove(cls)
				}, 5000)
			}
		}
		if (this.count.count > 999) {
		    document.querySelector('.traning_bl__info_count').style.right = '30px'
		    htmlCount.style.right = '-37px'
		}
		htmlCount.innerHTML = this.count.count
		this.saveSettings()
	}

	setTimerInfo() {

		let totalSeconds = this.lesettings[this.main].time || 0

		this.timer = setInterval(() => {
			if (this.time < 60) {
				totalSeconds += 1
				let hours = Math.floor(totalSeconds / 3600)
				hours = (hours < 10) ? '0' + hours : hours
				let tmpTotalSeconds = totalSeconds % 3600
				let minutes = Math.floor(tmpTotalSeconds / 60)
				let seconds = tmpTotalSeconds % 60
				if (((minutes % 10) === 0)) {
					if (seconds === 0)
					document.querySelector('.traning_bl__info_time span').classList.add('time')
					if (seconds === 5) 
					document.querySelector('.traning_bl__info_time span').classList.remove('time')
				}
				minutes = (minutes < 10) ? '0' + minutes : minutes
				seconds = (seconds < 10) ? '0' + seconds : seconds
				this.time++
				document.querySelector('#' + this.main + ' .traning_bl__info_time span').innerHTML = `${hours}:${minutes}:${seconds}`
				this.lesettings[this.main].time = totalSeconds
			} else if (this.time === 60) {
				this.lesettings[this.main].time = totalSeconds - 60
				this.saveSettings(true)
				this.time++
			}
		}, 1000)
	}

	textToSpeech($el, text) {
		$el.classList.add('play')
		$el.querySelector('.fas').classList.remove('fa-volume-mute')
		$el.querySelector('.fas').classList.add('fa-volume-up')
		if (!('speechSynthesis' in window)) {
            alert('Озвучення недоступне у цьому браузері.');
        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            const voices = window.speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
            utterance.voice = voices.find(v => v.localService) || voices[0] || null;
            if (!navigator.onLine && !voices.some(v => v.localService)) {
                alert('Для озвучення офлайн встановіть англійський голос у налаштуваннях телефону.');
            } else {
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
            }
        }
		setTimeout(() => {
			$el.classList.remove('play')
			$el.querySelector('.fas').classList.remove('fa-volume-up')
			$el.querySelector('.fas').classList.add('fa-volume-mute')
		}, 2000)
	}

	getAudioBtn() {
		return `<button type="button" class="btn btn-secondary btn-rounded btn-icon play_audio_btn texttospeech">
            <i class="fas fa-volume-mute"></i>
      	</button>`
	}

	getAppWraper(name, h = '', cls = '') {
		return `<div id="${name}" class="row justify-content-center traning_bl__container">
			<div class="col-12 col-lg-6">
					<div class="traning_bl ${cls}">
						${h}
						<div class="traning_bl__info d-flex mt-3 justify-content-between px-3 align-items-center">
							<div class="traning_bl__info_time">time: <span>00:00:00</span></div>
							<div class="traning_bl__info_count">count: <span>0</span></div>
						</div>
					</div>
			</div>
		</div>`
	}

	saveSettings(file = false) {

		window.localStorage.setItem('le-sett', JSON.stringify(this.lesettings))

	}

	beforeDestroy() {
		clearInterval(this.timer)
	}
}
