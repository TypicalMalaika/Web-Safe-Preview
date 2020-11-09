$(document).ready(() => {
  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val());
  });

  $('#font').on('change', (event) => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
    });
  });

  $('#font').on('chnage', (event) => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
    });
  });

  $('.weight').on('change', (event) => {
    $('.preview').css({
      fontWeight: $(event.currentTarget).val()
    });
  });

  $('.weight').on('keyup', (event) => {
    let fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css({
      fontSize: fontSize
    });
  });
});
