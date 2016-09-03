import Flickity from 'flickity';

(function(){
    instantiateFlickities();
})();

function instantiateFlickities () {
    const mainCarrousel = new Flickity('[data-id="main-carrousel"]', {pageDots: false});    
}

