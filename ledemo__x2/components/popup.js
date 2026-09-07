export const Popup = {

	createElement: (title = '', content = '') => {

		let h = `
		<div class="helper_popup">
			<div class="helper_content">
				<div><div class="helper_title text-center font-weight-bold">${title}</div>
				<div class="helper_text pt-3">${content}</div></div>
			</div>
		</div>`
		document.querySelector('body').insertAdjacentHTML('beforeend', h)
	},

	deleteElement: (time = 10000) => {

		function timer() {
			if (document.querySelector('.helper_popup'))
				document.querySelector('.helper_popup').remove()
		}

		return setTimeout(timer, time)
	}
}
