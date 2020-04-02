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
                location.reload(true);
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

// function edit(movieId){
//     id = $(this).attr("id");
//     console.log(id);
//     $.ajax({
//         url: "https://localhost:44325/api/movie/"+ movieId,
//             datatype: 'json',
//             type: 'put',
//             contentType: 'application/json',
//             data: JSON.stringify(movieId),
//             success: function(){
//                 console.log("Success")
//             }
//     })
// }


//     $(".edit").click(function(){
//       $("#19").hide();
//     });
//   });


//   $(document).ready(function(){
//     $(".edit").click(function(){
//       $(".19").hide();
//     });
//     $(".edit").click(function(){
//       $(".19").show();
//     });
//   });


function del(movieId){
        $.ajax({
            url: "https://localhost:44325/api/movie/"+ movieId,
                dataType: 'json',
                type: 'delete',
                contentType: 'application/json',
                data: JSON.stringify(movieId),
                success: function(){
                    location.reload();
 
                console.log("Success")
    }

});
}



// $(function() {
//     $('#Movies').on('click', 'tr', function(event) {
//       $(this).addDisplay('none').siblings().removeClass('highlight');
//     });

//     $('#btnRowClick').click(function(e) {
//       var rows = getHighlightRow();
//       if (rows != undefined) {
//         alert(rows.attr('id'));
//       }
//     });

//     var getHighlightRow = function() {
//       return $('tbody > tr.hide');
//     }

//   });





$(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        {
        data.map(function(el){
            $("#Movies").append(`
            <tr class = "${(el.movieId)}">
            <td>${(el.title)}</td>
            <td>${(el.director)}</td>
            <td>${(el.genre)}</td>

            <td>
            <button class="edit">Edit</button>
            <button onClick="del(${(el.movieId)})">Delete</button>
            </td>
            </tr>

            `)
        })
        }
    })
})