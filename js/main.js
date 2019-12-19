// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   } 
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);
  
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      console.log(modal);
      console.log(modalBtn);
      console.log(closeBtn);

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });    
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() +10 + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация формы

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате: name@domain.com"
      }
    }
  });
//маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

//валидация для control__form
$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required"
      
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не более 15 букв"
    },
    userPhone: "Телефон обязателен"
    
  }
});
//маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});


// Валидация для footer__form
$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // compound rule
    userQuestion: {
      required: true,
      maxlength: 50
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не более 15 букв"
    },
    userPhone: "Телефон обязателен",
    userQuestion: {
      required: "Заполните поле",
      maxlength: "Сообщение не более 50 знаков"
    }
  }
});
//маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

});