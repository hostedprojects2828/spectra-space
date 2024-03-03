import { sendMail } from './emailAdapter.js';

// document.getElementById('sendMessage').addEventListener('submit', e => {
//   try {
//     e.preventDefault();
//     document.getElementById('mail_send').innerHTML = 'Sending...';

//     let name = document.getElementById('name');
//     let phone = document.getElementById('phone');
//     let email = document.getElementById('email');
//     let message = document.getElementById('message');

//     emailjs.init('Q1alIYHYm0ECNkjA-');

//     var templateParams = {
//       from_name: name.value,
//       email: email.value,
//       from_phone: phone.value,
//       message: message.value,
//     };
//     if (name.value.length < 2) {
//       document.getElementById('name_val').innerHTML = 'Name should have min 2 letter.';
//       return;
//     }

//     emailjs.send('service_645lg88', 'template_oy4oiad', templateParams).then(
//       function (response) {
//         console.log('SUCCESS!', response.status, response.text);

//         if (response.status === 200) {
//           document.getElementById('mail_send').innerHTML = 'Thank for contacting. We will get back to you soon.';
//           document.getElementById('name').value = '';
//           document.getElementById('phone').value = '';
//           document.getElementById('email').value = '';
//           document.getElementById('message').value = '';
//         }
//       },
//       function (error) {
//         console.log('FAILED...', error);
//       }
//     );
//   } catch (error) {
//     console.log('Error in email', error);
//   }
// });

export const mailFormSubmission = () => {
  document.getElementById('sendMessage').addEventListener('submit', async e => {
    try {
      e.preventDefault();

      document.getElementById('mail_send').innerHTML = 'Sending...';

      let name = document.getElementById('name');
      let phone = document.getElementById('phone');
      let email = document.getElementById('email');
      let message = document.getElementById('message');

      var templateParams = {
        from_name: name.value,
        email: email.value,
        from_phone: phone.value,
        message: message.value,
      };
      if (name.value.length < 2) {
        document.getElementById('name_val').innerHTML = 'Name should have min 2 letter.';
        return;
      }

      let responseMail = await sendMail('service_645lg88', 'template_oy4oiad', templateParams);

      console.log(responseMail);
      if (responseMail && responseMail.success) {
        document.getElementById('mail_send').innerHTML = responseMail.message;
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        console.log('FAILED...', responseMail.message);
        document.getElementById('mail_send').innerHTML = 'Sorry, Not able to forward mail.';
      }
    } catch (error) {
      console.log('Error in email', error);
    }
  });
};
