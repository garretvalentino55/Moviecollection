(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);



$(function(){
    var id = 3;
    data = {};
    $.ajax({
        url: "https://localhost:44325/api/movie/"+ id,
        data: JSON.stringify(data),
        success: function(data){
            $("#MovieInfo").append(`<div> MovieTitle: ${data["title"]}</div>
                 <div> Genre: ${data["genre"]}</div>
                `);
        }
    })
})