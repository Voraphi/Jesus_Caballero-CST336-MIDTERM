$("#isbn-query").on("click", function() {
    
    var bookISBN = $("#isbn").val();
    
    $.ajax({
        method: "GET",
        url: "https://openlibrary.org/api/books?",
        // dataType: "json",
        data: { "bibkeys" : "ISBN:" + bookISBN,
                "format" : "json",
                "jscmd" : "data" },
        success: function(result, status) {
            console.log(result);
            $(".book-info").html('<img class="col-sm-3 cover" src="' + result["ISBN:" + bookISBN].cover.medium + '">'
                                 + '<div class="col-sm-4 info">' + '</div>');
            $(".info").html('<div> Title : ' + result["ISBN:" + bookISBN].title 
                            + '</div>' + '<div> Author: ' + result["ISBN:" + bookISBN].authors[0].name + '</div>' 
                            + '<div> Publish: ' + result["ISBN:" + bookISBN].publish_date + '</div>'
                            + '<div> Publisher: ' + result["ISBN:" + bookISBN].publishers[0].name + '</div>'
                            + '<div> ISBN: ' + bookISBN + '</div>'
                            + '<div> Pages: ' + result["ISBN:" + bookISBN].number_of_pages + '</div>');
            
        }
    });
});
