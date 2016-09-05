import $ from 'jquery';

class Fixed {
    constructor(selector) {
        this.element = $(selector);
        this.win = $(window);
        this.eltop = this.element.offset().top;
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        this.win.on('scroll', (e) => {
           this.handleScroll(e);
        });
    }
    
    handleScroll(e) {
        let wintop = this.win.scrollTop();
        if(wintop >= this.eltop) {
            let position = wintop - this.eltop;
            this.setPosition(position);
        } else {
            this.setPosition(0);
        }
    }
    
    setPosition(top) {
        this.element.css({transform: `translateY(${top}px)`});
    }
}


export default Fixed;
