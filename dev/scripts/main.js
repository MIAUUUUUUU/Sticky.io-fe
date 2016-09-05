import Flickity from 'flickity';
import Fixed from './modules/Fixed.js';

instantiateFlickities();
instantiateRanking();


function instantiateFlickities () {
    const mainCarrousel = new Flickity('[data-id="main-carrousel"]', {pageDots: false,wrapAround: true});    
}

function instantiateRanking() {
    const rank = new Fixed('#ranking');
    rank.init();
}


