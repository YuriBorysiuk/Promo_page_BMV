//Обращаемся ко всем ссылкам, начинающихся в href с #, кроме ссылок у которых только решетка
export default function smoothScroll() {

	const smothScrollElems = document.querySelectorAll ('a[href^="#"]:not(a[href="#"])')

	smothScrollElems.forEach(link => {
		link.addEventListener('click', (event) => {
			
			event.preventDefault()
			const id = link.getAttribute('href').substring(1)
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		})
	})
}