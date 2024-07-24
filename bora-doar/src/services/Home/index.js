// services/Home.js

import axios from 'axios';
import _ from 'lodash';
import { envConfig } from "../../config/env/loc";

export const PeriodoEnum = {
  TodoPeriodo: 0,
  UltimoAno: 1,
  UltimoMes: 2,
  UltimaSemana: 3
};

export function request() {
  return axios.create({
    baseURL: envConfig.boraDoarApi,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export function getInstituicao(callback, errorHandler) {
  const API_URL = `/instituicao`;

  request()
    .get(API_URL)
    .then((result) => callback(_.get(result, 'data')))
    .catch((error) => {
      let errorData = _.get(error, 'response.data');
      errorHandler(errorData);
    });
}

export function postInstituicao(params, callback, errorHandler) {
  const API_URL = `/Instituicao`;

  request()
    .post(API_URL, params)
    .then((result) => callback(_.get(result, 'data')))
    .catch((error) => {
      let errorData = _.get(error, 'response.data');
      errorHandler(errorData);
    });
}

export function postDoacao(dadosDoacao, onSuccess, onError) {
  const API_URL = `/doacao`;

  request()
    .post(API_URL, dadosDoacao)
    .then((response) => {
      onSuccess('Doação realizada com sucesso'); 
    })
    .catch((error) => {
      let errorMessage = _.get(error, 'response.data.error') || 'Erro ao enviar doação';
      onError(errorMessage);
    });
}

export function getDoacao(periodo, callback, errorHandler) {
  const API_URL = `${envConfig.boraDoarApi}/doacao?periodo=${periodo}`;

  request()
    .get(API_URL)
    .then((result) => {
      let data = _.get(result, 'data');

      // Ordenar os dados pelo total de doações (descendente)
      data.sort((a, b) => b.totalDoacoes - a.totalDoacoes);

      callback(data);
    })
    .catch((error) => {
      let errorData = _.get(error, 'response.data');
      errorHandler(errorData);
    });
}
