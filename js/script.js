const penguin = document.getElementById("penguin");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
	jump();
})

function jump (){
	if(penguin.classList != "jump"){
		penguin.classList.add("jump")
	}
	setTimeout(function(){
		penguin.classList.remove("jump")
	}, 300)
}

let isAlive = setInterval ( function() {
	let penguinTop = parseInt(window.getComputedStyle(penguin).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

	if(cactusLeft < 50 && cactusLeft > 0 && penguinTop >= 140){
		alert("Game Over!!!")
	}
}, 10)
