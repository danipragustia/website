let btnSize = document.getElementById('btnFontsize')

btnSize.addEventListener('click', (event) => {
	if (document.body.style.fontSize == "") { document.body.style.fontSize = '1em'; }
	if (btnSize.getAttribute('value') == 'Normal') {
		btnSize.setAttribute('value') == 'Big Size'
		btnSize.innerHTML('Big Size')
		document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (1 * 0.3) + 'em'
	} else {
		btnSize.setAttribute('value') == 'Normal'
		btnSize.innerHTML('Normal Size')
		document.body.style.fontSize = '1em'
	}
})