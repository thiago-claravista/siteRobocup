import messageBox from './message-box.js';

export default (id) => {
  const form = document.forms[id];
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const fields = [...form].reduce((acc, { name }) => {
      const contains = acc.includes(name);
      return name && !contains ? [...acc, name] : acc;
    }, []);

    const data = {};
    for (const [name, value] of formData) data[name] = value;

    validationForm(fields, data, form);
  });
}

const validationForm = (fields, data, form) => {
  const complete = fields.every(field => Object.keys(data).includes(field));
  const emptyField = Object.entries(data).some(([, value]) => !value.trim());

  if (complete && !emptyField) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const invalidEmail = data.email.match(emailRegex);
    if (invalidEmail) messageBox("E-mail inválido!");
    else {
      messageBox("Mensagem enviada com sucesso!", "success");
      form.reset();
    }
  } else messageBox("Preencha todos os campos");
}
