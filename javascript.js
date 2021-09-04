$(document).ready(function()
{
	//variables
	var userScore = 0;
	var numBoxes = $( '.box' ).length;
	var numBoxesDropped = 0;

	$( '.box' ).draggable({
		revert: 'invalid'
	});

	$( '.droparea' ).droppable({
	  accept: '.box',
	  drop: boxDrop,
	});


	//BOX DROP FUNCTION
	function boxDrop( event, ui )
	{
	  let box = ui.draggable;
	  let boxNumType = box.attr( 'data-numtype' );
	  
	  let dropArea = $(this);
	  let dropAreaNumType = dropArea.attr( 'data-area-numtype' );
	  //check box num type matchs drop area type
	  if( boxNumType == dropAreaNumType )
	  {
		//correct
		box.addClass( 'correct' );
		userScore++;
	  }
	  else
	  {
		//incorect
		alert( "Wrong Field! This Animal doesn't Fall Into This Category!" );
		numBoxesDropped--
	  }

	  
	  $( '#score' ).text( userScore );
	  numBoxesDropped++;
	  
	  if( numBoxesDropped == numBoxes )
	  {
		alert('BRAVO, SUCCEEDED!');
		window.location.reload();
	  }
	}
  });