import $ from "jquery";

const $newsWrapper = $('#timeline');
const $newsTamplate = ` <article class="new">
                            <div class="banner">
                                <img src="{{bannerImage}}"></img>
                            </div>
                            <h1 class="title">{{title}}</h1>
                            <p class="content">
                                {{content}}
                            </p>
                            <div class="actions">
                                <a href="/project/readmore.html?id={{id}}" class="btn -compact readmore">Read more.</a>
                            </div>
                        </article>`;

const $featuredNewsWrapper = $('[data-id="main-carrousel"]');
const $featuredNewsTemplate = ` <figure class="new">
                                    <img src="{{bannerImage}}">
                                    <figcaption>{{content}}</figcaption>
                                </figure>`;

function render($wrapper, $template, data) {
    let $news = data.map(val => {
        let keys = Object.keys(val);
        let html = $template;
        keys.forEach(key => {
            html = html.replace('{{'+key+'}}', val[key]);
        });
        return html;
    });
    $wrapper.html($news);
}

function getFeaturedNews(news) {
    return news.slice(0,2);
}

function getNews(news) {
    return news.slice(2, news.length);
}

export default function load(url, cb) {
    $.get(url).then((data) => {
        if(typeof data === "string") {
            data = JSON.parse(data);
        }
        let feterednews = getFeaturedNews(data);
        let news = getNews(data);
        render($featuredNewsWrapper, $featuredNewsTemplate, feterednews);
        render($newsWrapper, $newsTamplate, news);
        cb(data);
    });    
}