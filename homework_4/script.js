$(document).ready(function () {
  $('.tabs_name').on('click', '.tab', function(event) {
      $(this).addClass('active').siblings().removeClass('active');
      $('.block').eq($('.tab').index(event.target)).addClass('active').siblings().removeClass('active');
  });
});