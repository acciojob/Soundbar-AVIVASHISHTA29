//your JS code here. If required.
let btns = document.querySelectorAll(".btn");

for(let i=0;i<btns.length;i++)
{
	btns[i].addEventListener("click",()=>{
		stopSounds();
		let audio = document.getElementById(btns[i].innerText);
		audio.play();
	})
	
}

let stop = document.querySelector(".stop");
stop.addEventListener("click",()=>{
	stopSounds();
})


function stopSounds(){
	for(let i=0;i<btns.length;i++)
{
	let audio = document.getElementById(btns[i].innerText);
		audio.pause();

}
}