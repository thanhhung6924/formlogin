// // Đối tượng validator
// function Validator(option) {
//   var formElement = document.querySelector(option.form); // Lấy ra form
//   if (formElement) {
//     option.rules.forEach(function (rule) {
//       var inputElement = formElement.querySelector(rule.selector);

//       if (inputElement) {
//         // Hàm validate để kiểm tra lỗi
//         function validate(inputElement, rule) {
//           console.log(rule)
//           inputElement.onblur = function () {
//             var errorMessage = rule.test(inputElement.value);
//             if (errorMessage) {
//               inputElement.setAttribute("placeholder", errorMessage);
//               inputElement.parentElement.classList.add("invalid");
//             }
//           };

//           inputElement.onclick = function () {
//             inputElement.parentElement.classList.remove("invalid");
//             inputElement.setAttribute("placeholder", "");
//           };
//         }

//         // Gọi hàm validate
//         validate(inputElement, rule);
//       }
//     });
//   }
// }

// // Định nghĩa rules
// Validator.isRequied = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.trim() ? undefined : "Vui lòng nhập trường này !";
//     },
//   };
// };

// Validator.isEmail = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value)
//         ? undefined
//         : "Vui lòng nhập đúng định dạng email !";
//     },
//   };
// };

// Validator.minLength = function (selector, min) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= min
//         ? undefined
//         : `Vui lòng nhập tối thiểu ${min} ký tự`;
//     },
//   };
// };

// Đối tượng validator
function Validator(option) {
  var formElement = document.querySelector(option.form); // Lấy ra form
  if (formElement) {
    option.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      // console.log(rule.selector)
      if (inputElement) {
        // Hàm validate để kiểm tra lỗi
        function validate(inputElement, rule) {
          // console.log(rule)
          // console.log(inputElement)
          inputElement.onblur = function () {
            var errorMessage = rule.test(inputElement.value);
            if (errorMessage) {
              inputElement.setAttribute("placeholder", errorMessage);
              inputElement.parentElement.classList.add("invalid");
            } else {
              inputElement.setAttribute("placeholder", "");
              inputElement.parentElement.classList.remove("invalid");
            }
          };

          inputElement.oninput = function () {
            inputElement.parentElement.classList.remove("invalid");
            inputElement.setAttribute("placeholder", "");
          };
        }

        // Gọi hàm validate
        validate(inputElement, rule);
      }
    });
  }
}

// Định nghĩa rules
Validator.isRequied = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này !";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value.trim())
        ? undefined
        : "Vui lòng nhập đúng định dạng email !";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};
