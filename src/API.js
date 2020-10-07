import axios from 'axios'; 

const getTodos = async () => {
   return await axios.get('https://jsonplaceholder.typicode.com/todos');
}

const getWeatherInfo = async (q) => {
   return await axios.get(`http://api.weatherstack.com/current?access_key=c04b4ff656dc649f49a72883c311a576&query=${q}`); 
}

const getAddressByCep = async (cep) => {
   return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export { getTodos, getWeatherInfo, getAddressByCep }; 