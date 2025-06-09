const reglas = [
  {
    regla: "Longitud mínima de  8 carateres",
    fn: (password) => {
      return password.length >= 8;
    },
  },
  {
    regla: "Longitud máxima de 12 caracteres",
    fn: (password) => {
      return password.length <= 12;
    },
  },
  {
    regla: "No puede contener espacios en blanco",
    fn: (password) => {
      return !password.includes(" ");
    },
  },
  {
    regla: "Debe contener al menos uno de estos caracteres !#$%&=",
    fn: (password) => {
      const caracteresEspeciales = ["!", "#", "$", "%", "&", "="];
      return caracteresEspeciales.some((caracter) =>
        password.includes(caracter)
      );
    },
  },
  {
    regla: "Debe contener al menos un dígito numérico",
    fn: (password) => {
      const caracteresEspeciales = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];
      return caracteresEspeciales.some((caracter) =>
        password.includes(caracter)
      );
    },
  },
  {
    regla: "El último caracter no puede ser caractere especial",
    fn: (password) => {
      const caracteresEspeciales = ["!", "#", "$", "%", "&", "="];
      const ultimoCaracter = password[password.length - 1];
      return !caracteresEspeciales.includes(ultimoCaracter);
    },
  },
];

module.exports = reglas;
