function duplicateHtml() {
	
	// Get each of elements in document.
    var nodeIterator = document.createNodeIterator(
		document.body,
		NodeFilter.SHOW_ALL,
		null,
		false
	);
	
    var currentNode;
	
    while ( currentNode = nodeIterator.nextNode() ) {
	
		// if node's type is Comment ( 8 means comment type ) and has "duplicate." string.
		if ( currentNode.nodeType === 8 && true === currentNode.nodeValue.includes('duplicate.') ) {
		
			// Get the number after the "duplicate." string.
			const amountToCopy = getCopyAmount( currentNode.nodeValue );
			
			// Go two nodes forward to pass line break and reach the Html element just below the duplicate comment.
			nodeIterator.nextNode(); // skip line break
			nodeToBeCopied = nodeIterator.nextNode();

			// Duplicate up to given number after the "duplicate.".
			for ( var i = 0; i < amountToCopy - 1; i++ ) {
				insertAfter( nodeToBeCopied.cloneNode( true ), nodeToBeCopied );
			}

		}
		
    }
}

// Return integer that given after "duplicate." string.
function getCopyAmount( nodeValueString ) {
	const stripped = nodeValueString.replace('duplicate.','');
	const amountToCopy = parseInt( stripped, 10 );
	
	return amountToCopy;
}

// Clone
function insertAfter( newNode, referenceNode ) {
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
}

window.addEventListener( "load", function() {
    duplicateHtml();
} );