import blockScrolled from './blockScrolled.js'
import obj from './blockScrolled.js'

const {disabledScroll, enableScroll} = blockScrolled

export default function modal() {
	
	const moreElems = document.querySelectorAll('.more')
	const modalElem = document.querySelector('.modal')

	const openModal = () => {
		modalElem.classList.remove('hidden')
		disabledScroll()
	}
	
	const closeModal = () => {
		modalElem.classList.add('hidden')
		enableScroll()
	}

	moreElems.forEach(moreElem => {
		moreElem.addEventListener('click', openModal)
	})

	modalElem.addEventListener('click', (event) => {
		console.log(event.target)
		const target = event.target
		if (target.classList.contains('overlay') || 
			target.classList.contains('modal__close')) {
			closeModal()
		}
	})
}