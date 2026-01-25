export const validateForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};
