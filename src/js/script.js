document.addEventListener('DOMContentLoaded', () => {});

jQuery(() => {
  if ($(window).width() < 768) {
    const $burger = $('.hamburger');
    const $headerInner = $('.header__inner');
    const $headerNavItem = $('.header__nav ul li');
    const $headerBtn = $('.header__btn');

    const $burgerTl = new TimelineMax();

    $burgerTl
      .fromTo(
        $headerInner,
        0.3,
        { height: 0, opacity: 0, visibility: 'hidden' },
        { height: '195px', opacity: 1, visibility: 'visible' }
      )
      .staggerFrom(
        $headerNavItem,
        0.3,
        {
          y: 50,
          opacity: 0,
        },
        0.1
      )
      .from($headerBtn, 0.3, { y: 50, opacity: 0 });

    $burgerTl.reverse();

    $burger.on('click', () => {
      $burger.toggleClass('is-active');
      $burgerTl.reversed(!$burgerTl.reversed());
    });
  }

  const $subPic = $('.single-page__subpic');
  const $mainPic = $('.single-page__mainpic img');

  $subPic.on('click', () => {
    let $currentPic = $(this).attr('src');
    $mainPic
      .fadeOut(400, () => {
        $mainPic.attr('src', $currentPic);
        $mainPic.attr('srcset', '');
      })
      .fadeIn();
  });
});
