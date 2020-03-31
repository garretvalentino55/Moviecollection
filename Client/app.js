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



// $(function(){

//     data = {};
//     console.log(data)
//     $.get("https://localhost:44325/api/movie/", function(data){
        
//             $("#MovieInfo").append(`<div> MovieTitle: ${data["title"]}</div>
//                  <div> Director: ${data["director"]}</div>
//                  <div> Genre: ${data["genre"]}</div>
//                 `)
            
//         })
//     }
// for(let i = 0; i< data.length; i++)

// $("#Movies").append(`
// <tr>
// <td>${JSON.stringify(data[i]["title"])}</td>
// <td>${JSON.stringify(data[i]["director"])}</td>
// <td>${JSON.stringify(data[i]['genre'])}</td>
// </tr>
// `)




$(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        {
        data.map(function(el){
            $("#Movies").append(`
            <tr>
            <td>${(el.title)}</td>
            <td>${(el.director)}</td>
            <td>${(el.genre)}</td>
            </tr>
            `)
        })
        }
    })
})

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
$(function(){

    var id = 1;
    data = {};
    $.ajax({
        url: "https://localhost:44325/api/movie/"+ id,
        data: JSON.stringify(data),
        success: function(data){
            $("#MovieInfo").append(`<div> MovieTitle: ${data["title"]}</div>
                 <div> Director: ${data["director"]}</div>
                 <div> Genre: ${data["genre"]}</div>
                `);
        }
    })
})


// function PostAction(){
//     $.post()
// }



