// Body Header
document.querySelector('#header-container').style.backgroundColor = 'green';
// Section Div class = urgencia
var corDaUrgencia = document.querySelectorAll('.emergency-tasks div');
for (var i of corDaUrgencia) {
    i.style.backgroundColor = '#f37bd9a6';
}
var corTituloUrgencia = document.querySelectorAll('.emergency-tasks h3');
for (var i of corTituloUrgencia) {
    i.style.backgroundColor = '#ec04baa6';
}
// Section Div class = Não-Urgencia
var corNaoUrgente = document.querySelectorAll('.no-emergency-tasks div');
for (var i of corNaoUrgente) {
    i.style.backgroundColor = '#e9f362f5';
}
var corTituloNaoUrgencia = document.querySelectorAll('.no-emergency-tasks h3');
for (var i of corTituloNaoUrgencia) {
    i.style.backgroundColor = '#0000009a';
}
// Footer
document.querySelector('#footer-container').style.backgroundColor = "green";