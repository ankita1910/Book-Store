bookStore = {};
bookStore.bookCollection = [];
$(document).ready(function() {
	$.ajax({
    type: "get",
    url: "../books.json",
    datatype: "json",
    success: function(booksData) {
      bookStore.bookCollection  = booksData;
      console.log(bookStore.bookCollection);
    }
  });
});
bookStore.resetInputBox = function() {
	if($("#search-book").val() == "Search Book") {
		$("#search-book").val(" ");
	}
};

bookStore.searchBook = function() {
	var searchQuery = $("#search-book").val().trim();
	var searchedResult = "";
	console.log(searchQuery);
	$.each(bookStore.bookCollection, function(key, value) {
		if(searchQuery == value.name) {
			searchedResult += "<div class='book-name'>Book Name: " + value.name + "</div>";
			searchedResult += "<div class='book-details'>Author: " + value.author + "</div>";
			searchedResult += "<div class='book-details'>Category: " + value.category + "</div>";
			searchedResult += "<div class='book-details'>Ratings: " + value.ratings + "</div>";
			searchedResult += "<div class='book-details location'>Please find this book in column " + value.column + " on shelf " + value.shelf + "</div>";
			$(".searched-result").html(searchedResult);
			console.log(value);
		} else if(searchQuery == "") {
			// $(".searched-result").html("Please enter Book Name");
			console.log("Please enter Book Name");
		} else {
			// $(".searched-result").html("Book not found");
			console.log("Book not found");
		}
	});

};