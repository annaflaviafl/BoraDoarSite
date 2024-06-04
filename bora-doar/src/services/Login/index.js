import { request } from ".."
import _ from 'lodash';
import { envConfig } from "../../config/env/loc";

export function getUsuario(params, callback, errorHandler) {
    const API_URL = `${envConfig.boraDoarApi}`

    request()
        .get(`${API_URL}/usuario`, { params })
        .then((result) => callback(_.get(result, 'data')))
        .catch((error) => {
            let errorData = _.get(error, 'response.data')
            errorHandler(errorData)
        })
}