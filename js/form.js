(function () {
  // Инициализируем EmailJS с вашим User ID
  emailjs.init('dG0DBeTTRzKuRTo8Q');

  // При отправке формы
  document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию

      // Отправляем данные формы через EmailJS
      emailjs.sendForm('service_veytp7u', 'template_dwtruqc', this)
          .then(function (response) {
              console.log('Success!', response.status, response.text);
              // Добавьте свою логику после успешной отправки формы
          }, function (error) {
              console.log('Error!', error);
              // Добавьте свою логику в случае ошибки отправки формы
          });
  });
})();

(function () {
    // Инициализируем EmailJS с вашим User ID
    emailjs.init('dG0DBeTTRzKuRTo8Q');
  
    // При отправке формы
    document.getElementById('ContactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
        // Отправляем данные формы через EmailJS
        emailjs.sendForm('service_veytp7u', 'template_iffxsv5', this)
            .then(function (response) {
                console.log('Success!', response.status, response.text);
                // Добавьте свою логику после успешной отправки формы
            }, function (error) {
                console.log('Error!', error);
                // Добавьте свою логику в случае ошибки отправки формы
            });
    });
  })();

  (function () {
    // Инициализируем EmailJS с вашим User ID
    emailjs.init('dG0DBeTTRzKuRTo8Q');
  
    // При отправке формы
    document.getElementById('ContactForm2').addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
        // Отправляем данные формы через EmailJS
        emailjs.sendForm('service_veytp7u', 'template_iffxsv5', this)
            .then(function (response) {
                console.log('Success!', response.status, response.text);
                // Добавьте свою логику после успешной отправки формы
            }, function (error) {
                console.log('Error!', error);
                // Добавьте свою логику в случае ошибки отправки формы
            });
    });
  })();