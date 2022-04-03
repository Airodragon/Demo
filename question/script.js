$('.pagenation').on('click', function() {
    $('.pagenation').removeClass('is-active');
    $(this).addClass('is-active');
  })
  
  $('.page-01').on('click', function() {
    $('.block').removeClass('is-active');
    $('.block-01').addClass('is-active');
    // $('.block-01').addClass('animate-out');
    $('.pagenation').removeClass('is-active');
    $('.page-01').addClass('is-active');
  })
  
  $('.page-02').on('click', function() {
    $('.block').removeClass('is-active');
    $('.block-02').addClass('is-active');
    // $('.block-03').addClass('animate-out');
     $('.pagenation').removeClass('is-active');
    $('.page-02').addClass('is-active');
  })
  
  $('.page-03').on('click', function() {
    $('.block').removeClass('is-active');
    $('.block-03').addClass('is-active');
    // $('.block-03').addClass('animate-out');
     $('.pagenation').removeClass('is-active');
    $('.page-03').addClass('is-active');
  })