/* console.log('stanger things are coming!');


const addH2 = () => {
    let $h2 = $('<h2>').text("just getting started");
    $('body').append($h2);
}

addH2(); */

/* const promise = $.ajax({
    url: 'http://www.omdbaoi.com/?apikey=53aa2cd6&t=Frozon',
    success: (data) => {
        console.log(data);
    },
    error: () => {
        console.log("bad request");
    }
}); */

let key = '53aa2cd6'
let movieTitle = 'Mad Max: Fury Road'
$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        const promise = $.ajax({
            url: `http://www.omdbapi.com/?apikey=${key}&t=${userInput}`
        })
        
        promise.then(
            (data) => {
                console.log(data)
                $('#title').html(data.Title)
                $('#year').html(data.Year)
                $('#rated').html(data.Rated)
            },
            () => {
                console.log('bad request')
            }
        )
    })
})