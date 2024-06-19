import axios from 'axios'; // ou o que for usado para fazer requisições HTTP
import _ from 'lodash';
import { envConfig } from "../../config/env/loc";

export function request() {
  return axios.create({
    // Adicione configurações comuns aqui, se necessário
  });
}

export function getInstituicao(callback, errorHandler) {
    const API_URL = `${envConfig.boraDoarApi}/instituicao`;

    request()
        .get(API_URL)
        .then((result) => callback(_.get(result, 'data')))
        .catch((error) => {
            let errorData = _.get(error, 'response.data');
            errorHandler(errorData);
        });
}

export function postUsuario(params, callback, errorHandler) {
  const API_URL = `${envConfig.boraDoarApi}/instituicao`;

  request()
      .post(API_URL, params)
      .then((result) => callback(_.get(result, 'data')))
      .catch((error) => {
          let errorData = _.get(error, 'response.data');
          errorHandler(errorData);
      });
}