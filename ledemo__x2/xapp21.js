import Words from './pages/words.js'
import Lessons from './pages/lessons.js'
import Form3 from './pages/form3.js'
import {bottomMenu} from './components/menu.js'

const appClasses = {
	lessons: Lessons,
	words: Words,
	form3: Form3
}
const appClassesDefault = {
	lessons: Lessons,
	words: Words,
	form3: Form3
}

const $app = document.querySelector('.container')
let startClass = 'words'

const initApp = (name) => {
	window.localStorage.setItem('le-sett-main', name)
	startClass = name
	appClasses[startClass] = new appClasses[startClass]($app.dataset.phash)
	appClasses[startClass].createElement()
	$app.insertAdjacentHTML('beforeend', bottomMenu(Object.keys(appClassesDefault), startClass))
	document.title = 'Learn English | ' + startClass.toUpperCase()
}

const destroyApp = () => {

	appClasses[startClass].saveSettings(true)
	appClasses[startClass].beforeDestroy()
	delete appClasses[startClass]
	appClasses[startClass] = appClassesDefault[startClass]
}

if (window.localStorage.getItem('le-sett-main'))
	startClass = window.localStorage.getItem('le-sett-main')

initApp(Object.hasOwn(appClassesDefault, startClass) ? startClass : 'words')


document.querySelector('body').addEventListener('click', e => {

	if (e.target.classList.contains('top_menu__item')) {
		$app.querySelector('.top_menu__item.active').classList.remove('active')
		e.target.classList.add('active')
		destroyApp()
		initApp(e.target.dataset.menuitem)
		return
	}

	appClasses[startClass].eventListener(e, 'click')
})

$app.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		appClasses[startClass].eventListener(e, 'keypress')
	}
})

$app.addEventListener('change', e => {
	appClasses[startClass].eventListener(e, 'change')
})

window.addEventListener('resize', e => {
	if (window.innerHeight < 555) {
		window.scrollTo(0, window.innerHeight)
	}
})


const saveProgress = () => appClasses[startClass].saveSettings();
window.addEventListener('pagehide', saveProgress);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveProgress();
});
