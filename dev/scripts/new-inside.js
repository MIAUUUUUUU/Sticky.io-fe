import $ from 'jquery';

function fetchData(url, fn) {
    $.get(url).then((data) => {
        if(typeof data === "string") {
            data = JSON.parse(data);
        }
        fn(data);
    });
}

function render(data) {
    const $title = $('[data-id="title"]');
    const $image = $('[data-id="image"]');
    const $content = $('[data-id="content"]');
    
    $title.text(data.title);
    $image.attr('src', data.bannerImage);
    $content.text(data.content);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const defaultUrl = 'http://miaucore.azurewebsites.net/api/News/';
const id = getParameterByName('id');

fetchData(defaultUrl+id, render);