$(document).on('ready', function() {
	var turn = 0;
	var isX = true;
	var winningCombos =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
	

	$('td').on('click',function(){

		function checkWinner(){
			for(var i= 0; i < winningCombos.length; i++){
				var combo = winningCombos[i];
				
				// combo will be [1,2,3]
				if ( $('.X').hasClass(combo[0]) && $('.X').hasClass(combo[1]) && $('.X').hasClass(combo[2]) ) {
					alert("X is the winner");
				}else if($('.O').hasClass(combo[0]) && $('.O').hasClass(combo[1]) && $('.O').hasClass(combo[2])){
					alert("O is the winner");
				}else if($('.X').length === 5){
					alert("Stalemate!");
					stopPropagation();
				}
				// compare each combo to a playerState array or use the DOM => s(".x")
				// alert("we have a winner")
			}
			//if($('.X').length = 5 && !$('.X').hasClass(combo[0]) && !$('.X').hasClass(combo[1]) && !$('.X').hasClass(combo[2])){
				
			
		}
		
		if(turn % 2 === 0){
			$(this).html("X").addClass("X");
		}else{
			$(this).html("O").addClass("O");
		}
		//check for winner
		checkWinner();

		$(this).off('click');
		turn ++;

	});
});
