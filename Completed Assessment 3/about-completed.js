console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successful Submission');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



document.getElementById('ducky').addEventListener('mouseover', () => {
	alert('You are the best!')
})