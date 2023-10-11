const sendRegistrationRequest = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getValidationResult = (data, requiredFields) => {
  let isValid = true;
  let errors = {};

  requiredFields.forEach((field) => {
    if (!data[field]) {
      isValid = false;
      errors = {
        ...errors,
        [field]: ["Поле обязательно для заполнения"],
      };
    }
  });

  return { isValid, errors };
};

export { sendRegistrationRequest, getValidationResult };
