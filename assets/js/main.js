document.getElementById('btnFontsize').addEventListener('click', (event) => document.body.style.fontSize = (document.body.style.fontSize == '1em' || '' ? parseFloat(document.body.style.fontSize) + (1 * 0.3) : '1') + 'em')
