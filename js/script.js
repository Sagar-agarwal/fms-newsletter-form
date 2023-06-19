const actions = Object.freeze({
  showForm: 'showFrom',
  showSuccess: 'showSuccess',
});

const formVisibilityHandler = (action) => {
  const form = document.querySelector('.section__form');
  const success = document.querySelector('.section__success');

  if (action === actions.showForm) {
    // Display Form
    form.classList.remove('inactive');
    success.classList.add('inactive');
  } else if (action === actions.showSuccess) {
    // Display Success message
    form.classList.add('inactive');
    success.classList.remove('inactive');
  }
};

const resetForm = () => {
  const email = document.querySelector('.email');
  email.value = '';
};

const isValidEmailAddress = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const invalidEmailHandler = () => {
  const emailError = document.querySelector('.email__error');
  const email = document.querySelector('#email');
  emailError.classList.add('error');
  email.classList.add('error');
};

const submitForm = (emailAddress) => {
  const successEmailAddress = document.querySelector('.success__detail-text--email');
  successEmailAddress.textContent = emailAddress;
  formVisibilityHandler(actions.showSuccess);
};

const formSubmitHandler = (e) => {
  const email = document.querySelector('#email');
  const emailAddress = email.value;
  const isValidEmail = isValidEmailAddress(emailAddress);
  // invalidEmailHandler(emailAddress);

  if (isValidEmail) {
    submitForm(emailAddress);
  } else {
    invalidEmailHandler();
  }

  e.preventDefault();
};

const email = document.querySelector('#email');
email.addEventListener('focus', (e) => {
  e.target.classList.remove('error');
  const emailError = document.querySelector('.email__error');
  emailError.classList.remove('error');
});

const submit = document.querySelector('#submit');
submit.addEventListener('click', formSubmitHandler);

const dismiss = document.querySelector('#dismiss');
dismiss.addEventListener('click', (e) => {
  formVisibilityHandler(actions.showForm);
  resetForm();
  e.preventDefault();
});
