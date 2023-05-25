function scrollToElement() {
  var target = $('#character');
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 2000); // Thời gian cuộn (ms)
}

// Tạo một mảng chứa tất cả các phần tử cần lazy load background
const lazyLoadElements = document.querySelectorAll('.lazy-load-bg');

// Kiểm tra xem một phần tử có trong tầm nhìn hay không
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Thiết lập hình ảnh nền từ thuộc tính data-src
function setBackgroundImage(element) {
  const imageUrl = element.getAttribute('data-src');
  element.style.backgroundImage = `url(${imageUrl})`;
}

// Xử lý sự kiện scroll và kiểm tra các phần tử cần lazy load
function lazyLoadBackground() {
  lazyLoadElements.forEach(element => {
    if (isElementInViewport(element)) {
      setBackgroundImage(element);
    }
  });
}

// Gắn sự kiện scroll để thực hiện lazy load khi cuộn trang
window.addEventListener('scroll', lazyLoadBackground);
window.addEventListener('resize', lazyLoadBackground);

// Gọi hàm lazyLoadBackground lần đầu để kiểm tra các phần tử hiển thị ban đầu
lazyLoadBackground();
