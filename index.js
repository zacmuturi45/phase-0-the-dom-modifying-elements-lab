document.querySelector('main#main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Isaac is the champion';
document.body.append(newHeader);
