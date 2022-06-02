const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) =>
  console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) =>
  console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      try {
        const country = {
          name: "Brazil",
          hdi: 0.759,
          currency: "Real",
        };
        onSuccess(country);
      } catch (error) {
        onSuccess(error);
      }
    } else {
      const errorMessage = "Country could not be found";
      throw new Error(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
