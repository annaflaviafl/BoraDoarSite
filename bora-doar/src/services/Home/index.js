// services/Home.js

import axios from 'axios'; // Importar o axios para fazer requisições HTTP
import _ from 'lodash';
import { envConfig } from "../../config/env/loc";

// Função utilitária para criar uma instância do axios com configurações comuns
export function request() {
  return axios.create({
    // Adicione configurações comuns aqui, se necessário
  });
}

// Função para buscar instituições
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

// Função para cadastrar novo usuário (instituição)
export function postInstituicao(params, callback, errorHandler) {
  const API_URL = `${envConfig.boraDoarApi}/usuario`; // Corrigir URL para endpoint de usuário

  request()
    .post(API_URL, params)
    .then((result) => callback(_.get(result, 'data')))
    .catch((error) => {
      let errorData = _.get(error, 'response.data');
      errorHandler(errorData);
    });
}

// Função para cadastrar nova doação
export function postDoacao(dadosDoacao, onSuccess, onError) {
  const API_URL = `${envConfig.boraDoarApi}/doacao`; 

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
