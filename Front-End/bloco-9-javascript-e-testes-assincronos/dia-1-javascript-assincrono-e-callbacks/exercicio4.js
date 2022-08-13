const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

console.log(getMarsTemperature());

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  const actualTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${actualTemperature} degree Celsius`), messageDelay()); 
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo