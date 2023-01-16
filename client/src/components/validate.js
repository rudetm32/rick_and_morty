const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export default function validate(inputs) {
  const errors = {};
  if (!inputs.username) {
    errors.username = "Este campo no debe estar vacio.";
  } else if (!emailRegex.test(inputs.username)) {
    errors.username = "El username debe ser un correo electronico.";
  
  } else if (!inputs.password) {
    errors.password = "el paswword no puede estar vacio";
  } else if (!passwordRegex.test(inputs.password)) {
    errors.password = (
    <ul>
      <li>
      El password debe tener al menos 8 caracteres
      </li>
      <li>Debe contener una letra mayuscula</li>
      <li>Debe contener un letra minuscula</li>
      <li>Debe contener un digito
      </li>
    </ul> 
    )
      }
  return errors;
}
