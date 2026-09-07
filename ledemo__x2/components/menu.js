export const bottomMenu = (items, activeItem = '') => {

	return '<nav class="bottom_menu"><ul class="top_menu d-flex align-items-center justify-content-center">' + 
		items.map(i => `
			<li class="top_menu__item ${i} ${(i === activeItem) ? 'active' : ''}" data-menuitem="${i}">${i}</li>
		`).join('') + 
		'</ul></nav>'
}