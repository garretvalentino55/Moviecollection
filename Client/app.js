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





function del(movieId){
        $.ajax({
            url: "https://localhost:44325/api/movie/"+ movieId,
                dataType: 'json',
                type: 'delete',
                contentType: 'application/json',
                data: JSON.stringify(movieId),
                success: function(){
                console.log("Success")
    }
})
}


// $(function(){
//     $.del(movieId)

//     $.ajax({
//         url: "https://localhost:44325/api/movie/"+ movieId,
//         data: JSON.stringify(data),
//         success: function(data){
//             $("#MovieInfo").`
//                 `);
//         }
//     })
// }


// $(function del(movieId){
//     $.ajax({
//         url: "https://localhost:44325/api/movie/"+ movieId,
//         type: 'delete'


// })
// })



$(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        {
        data.map(function(el){
            $("#Movies").append(`
            <tr id = "${(el.movieId)}">
            <td>${(el.title)}</td>
            <td>${(el.director)}</td>
            <td>${(el.genre)}</td>

            <td>
            <button onClick="edit(${(el.movieId)})">Edit</button>
            <button onClick="del(${(el.movieId)})">Delete</button>
            </td>
            </tr>

            `)
        })
        }
    })
})



// $(function(){
//     $.delete(movieId)
//     data = {};
//     $.ajax({
//         url: "https://localhost:44325/api/movie/"+ movieId,
//         data: JSON.stringify(data),
//         type: 'delete'
//         }
//     )
// })

// $(function(){
// $.get(), function(data){

// }
// }

// $(function(){
//     var tbody = document.getElementById("tbody");
//     var row = tbody.row.insertRow()
//     var title = row.insertCell1();
//     var director = row.insertCell2();
//     var genre = row.insertCell3();
//     cell1.innerHTML = 


    // var movie = {
    //     movieId: this["movieId"].value
    // }


//     var id = 1;

//     data = {};
//     $.ajax({
//         url: "https://localhost:44325/api/movie/"+ id,
//         data: JSON.stringify(data),
//         success: function(data){
//             $("#MovieInfo").append(`<div> MovieTitle: ${data["title"]}</div>

//                  <div> Director: ${data["director"]}</div>

//                  <div> Genre: ${data["genre"]}</div>
//                 `);
//         }
//     })
// })
