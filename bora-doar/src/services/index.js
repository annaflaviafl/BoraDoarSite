import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';

let toastrsList = [];

//não permite toasters repetidos
let subscribeToaster = (message) => {
    let toaster = require('toastr');
    toaster.subscribe(subscribedToastr => {
        //toaster desapareceu
        if (subscribedToastr && subscribedToastr.state === 'hidden') {
            if (toastrsList.find(x => x === message)) {
                _.remove(toastrsList, (toasterMessage) => {
                    return toasterMessage === message;
                })
            }
        }
    });

    //mensagem não foi exibida ainda
    if (!toastrsList.find(x => x === message)) {
        toaster.error(message);
        toastrsList.push(message);
    }
}

axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error && error.response && error.response.status === 401) {
            subscribeToaster('Ocorreu um problema de autenticação');
            return error;
        }

        if (error && error.response && error.response.status === 403) {
            subscribeToaster('Você não possui permissão para executar essa ação');
            return Promise.reject(error);
        }
        
        if(error && error.message === "canceled")
            return Promise.reject(error);

        let errorData = _.get(error, 'response.data');

        if (errorData && (errorData.HttpStatus >= 400 && errorData.HttpStatus < 500) && errorData.Mensagens) {
            errorData.Mensagens.forEach(mensagem => {
                if (mensagem.toUpperCase().includes("TIMEOUT")
                    || mensagem.toUpperCase().includes("NETWORK-RELATED")
                    || mensagem.toUpperCase().includes("TRANSPORT-LEVEL ERROR"))
                    subscribeToaster("Ocorreu um problema de rede. Verifique sua conexão com a internet ou recarregue a página");
                else
                    subscribeToaster(mensagem);
            });
        } else {
            subscribeToaster('Ocorreu uma falha no sistema enquanto seus dados estavam sendo processados, tente novamente mais tarde');
        }

        return Promise.reject(error);
    }
);

export const request = () => {
    const defaultOptions = {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    };

    const paramsSerializer = {
        serialize: params => qs.stringify(params, { arrayFormat: 'repeat' })
    }

    return {
        get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options, paramsSerializer }),
        post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
        patch: (url, data, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options })
    };
}
