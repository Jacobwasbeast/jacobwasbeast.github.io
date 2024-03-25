var channelId = 'UCW51tf9_Uxj9aOHwD7EOmuw';

$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            id: channelId,
            key: 'AIzaSyAg-R20JIqcdngqaU4p5IAEzqUoy52a2b4'},
            function (data) {
                $.each(data.items, function(i, item) {
                    pid = item.contentDetails.relatedPlaylists.uploads;
                    getVids(pid);
                })
            }
    );

    function getVids(pid) {
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",{
            part: 'snippet',
            maxResults: 25,
            playlistId: pid,
            key: 'AIzaSyAg-R20JIqcdngqaU4p5IAEzqUoy52a2b4'},
            function (data) {
                var output;
                $.each(data.items, function(i, item) {
                    videoId = item.snippet.resourceId.videoId;

                    output = '<div class="video embed-container"><iframe width="560" height="315" src=\"//www.youtube.com/embed/'+videoId+'\"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>'
                
                    $('#videoResults').append(output);
                })
            }
    );
        }
});



const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
});

nextBtn.addEventListener('click', () => {
  carousel.appendChild(carousel.firstElementChild);
});