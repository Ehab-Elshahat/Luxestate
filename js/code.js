// start hover links

//get the the navbar brand 
let navbarBrand = document.getElementById("navbar-brand"),

    // get links of the navbar
    navBarLink = document.querySelectorAll('.navbar-light .navbar-nav .nav-link');

// hover on brand navbar
function hover(element, colorhover, colormain) {
    'use strict';
    element.onmouseenter= function () {
        'use strict';
        this.style.color = colorhover;
    }
    element.onmouseleave= function () {
        'use strict';
        this.style.color = colormain;
    }
}

// hover on links navbar
navBarLink.forEach(el => {
    el.onmouseenter= function() {
        'use strict';
        this.style.color = '#ffcc01';
    }
    el.onmouseleave= function() {
        'use strict';
        this.style.color = 'rgba(0, 0, 0, 0.5)';
    }
});

// trigger function for brand and links navbar
hover(navbarBrand,'#ffcc01','rgba(0, 0, 0, 0.5)');

//get the btn of navbar 
let btnNavbar = document.getElementById('get-btn');

// func btn navbar
function hoverBtn(element, colorhover, colormain) {
    'use strict';
    element.onmouseenter= function () {
        'use strict';
        this.style.backgroundColor = colorhover;
    }
    element.onmouseleave= function () {
        'use strict';
        this.style.backgroundColor = colormain;
    }
}

// trigger func hover btn
hoverBtn(btnNavbar, '#fff', '#ffcc01');

//get naV-item 
let item = document.querySelectorAll('.navbar .navbar-nav .nav-item');

// add class active to active link
for (let i = 0; i < navBarLink.length; i++) {

    navBarLink[i].onclick = function () {
        'use strict';

        item.forEach( item=> {
            item.classList.remove('active');
        });

        this.parentElement.classList.add('active');
        
    }
    
};

// hover join us
let joinUs = document.getElementById("join-us");

hover(joinUs,'#ffcc01','rgba(0, 0, 0, 0.5)');

// hover sezrch botton
let searcBtn = document.getElementById("search-btn");
     searchBtn2 = document.getElementById("search-btn2"),
     viewBtn = document.getElementById("btn-view");


hoverBtn(searcBtn,'rgb(255, 222, 89)','#ffcc01');
hoverBtn(searchBtn2,'rgb(255, 222, 89)','#ffcc01');
hoverBtn(viewBtn,'#ffcc01','#fff');

// hover on work-box
let workBoxs = document.querySelectorAll('.work-box');

for (let i = 0; i < workBoxs.length; i++) {
    hoverBtn(workBoxs[i],'#ffcc01','#fff'); 
}

// hover on btn show more
let btnShowMore = document.getElementById("show-more");

hoverBtn(btnShowMore,'#ffcc01','#1F373D'); 

// hover on btn footer
let btnFooter = document.getElementById("btn-sub");

hoverBtn(btnFooter,'#ffcc01',''); 


