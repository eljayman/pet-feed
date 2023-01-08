const $sidebar = $('.profile-sidebar');

$(document).click(function (e) {
  const $target = $(e.target);
  if ($target.closest('.hamburger-btn').length) {
    return $sidebar.toggleClass('open');
  }

  if ($target.closest('.sidebar-close').length) {
    return $sidebar.removeClass('open');
  }

  if (
    !$target.closest('.profile-sidebar').length &&
    $sidebar.hasClass('open')
  ) {
    $sidebar.removeClass('open');
  }
});
