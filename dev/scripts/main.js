import Flickity from 'flickity';
import Fixed from './modules/Fixed.js';
import Posts from './modules/Posts.js';

Posts("http://miaucore.azurewebsites.net/api/News", (data) => {
    const mainCarrousel = new Flickity('[data-id="main-carrousel"]', {pageDots: false,wrapAround: true});    
});

const rank = new Fixed('#ranking');
