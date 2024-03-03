const emailServices = emailjs.init('Q1alIYHYm0ECNkjA-');

export const sendMail = async (serviceId, templateID, templateParams) => {
  try {
    let response = await emailjs.send(serviceId, templateID, templateParams);
    if (response && response.status === 200) {
      //   console.log('SUCCESS!', response.status, response.text);

      return { success: true, message: 'Thank for contacting. We will get back to you soon.' };
    } else {
      return { success: false, message: 'error' };
    }
  } catch (error) {
    console.log(error);
  }
};
