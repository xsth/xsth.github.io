!function(i){i.fn.sideToggle=function(n){var e=i.extend({moving:null,direction:null},n);return this.click(function(){var n={},t=e.moving,o=parseInt(i(t).css(e.direction),10),c=i(t).outerWidth();isNaN(o),0===o?(n[e.direction]=-c,i(t).animate(n)):(n[e.direction]=0,i(t).animate(n))})}}(jQuery);

$(document).ready(function(){
  $('#sideMenu').sideToggle({
    moving: '#sideMenuContainer',
    direction: 'right'
  });
});