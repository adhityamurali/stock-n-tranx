const ENV = process.env;

export default {
  port: parseInt(ENV.API_PORT || '5050', 10),
};