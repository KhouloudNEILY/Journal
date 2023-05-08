const addForm=document.querySelector('.form')
const title=document.querySelector('#title')
const date=document.querySelector('.time')
const content=document.querySelector('.textarea')


// local storage function
function diaryLocalStorage() {
	if (localStorage.getItem('diary') == null) {
		return [];
	} else {
		return JSON.parse(localStorage.getItem('diary'));//parse 
	}
}
function submit(event){
    // event.preventDefault()
 if(title.value==""||date.value==""||content.value==""){

    alert("please fill in all the fields")
 }
 else{
    const diary = diaryLocalStorage();
 diary.push({
    id: `date${Date.now()}`,
    title: title.value,
    createdAt: date.value,
    content: content.value,
})
localStorage.setItem('diary', JSON.stringify(diary));

alert(' Diary added successfully'); }
}
addForm.addEventListener('submit', submit);
console.log('hi')
console.log( 'diary')
