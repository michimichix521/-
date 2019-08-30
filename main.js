"use strict";

{
	const d_li=document.querySelectorAll(".dealer li");
	const resetButton=document.getElementById("resetButton");
	const result=document.getElementById("result");

	window.onload=function(){
		init();
	}

	for(let i=0;i<d_li.length;i++){
		d_li[i].addEventListener("click",()=>{
			if(!resetButton.classList.contains("hidden")){
				return;
			}

			let rdNum=Math.floor(Math.random()*d_li.length)
			if(i === rdNum){
				gameClear(i);//あたり
			}else{
				gameOver(i);//はずれ
			}

			resetButton.classList.remove("hidden");
		});
	}

	resetButton.addEventListener("click",()=>{
		init();
	});

	function init(){ //初期化
		for(let i=0;i<d_li.length;i++){
			d_li[i].textContent="?";
		}
		resetButton.classList.add("hidden");
		result.textContent="";
	}

	function gameClear(i){ //ゲームクリア
		d_li[i%2].textContent="あたり";
		d_li[(i+1)%2].textContent="JOKER";
		result.textContent="あたり！"
	}

	function gameOver(i){ //ゲームオーバ―
		d_li[i%2].textContent="JOKER";
		d_li[(i+1)%2].textContent="あたり";
		result.textContent="ざんねん！"
	}

}