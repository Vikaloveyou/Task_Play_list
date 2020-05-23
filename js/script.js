'use strict';
$(document).ready(function () {

    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        }, {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        }, {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        }, {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        }, {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        }, {
            author: "AC/DC",
            song: "BACK IN BLACK"
        }, {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        }, {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }];


    let $trackList = $('<ol></ol>')
    $('body').append($trackList)

    for (let track of playList) {
        let $track = document.createElement('li')

        let $showFullBtn = document.createElement('button')

        $($showFullBtn).attr('id', 'showFull')
        $showFullBtn.innerText = 'Show full'
        $track.innerHTML = `
        <span>${track.author}</span> -
        <span>${track.song}</span>
        `
        $($track).append($showFullBtn)
        $($trackList).append($track)

        $($showFullBtn).click(function () {
            $('body').append(`<div class="modal_window"><h1>${track.author} - ${track.song}</h1><button class="close_btn">Close All</btn></div>`)

            $('.close_btn').click(function () {
                $('.modal_window').remove()
                $($track).append('<hr/>')
            })
        })
    }

})






