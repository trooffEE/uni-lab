import axios from 'axios'
import qs from 'qs'

import SystemModule from '@/store/modules/system'
import { baseURL } from '@/utils/services/config'


const api = axios.create({
  paramsSerializer (params) {
    return qs.stringify(params, {
      arrayFormat: 'indices',
      encode: true,
    })
  },
})

api.interceptors.request.use(
  config => {
    SystemModule.loadingStart()

    config.headers.token = localStorage.getItem('token')

    // if (config.data) {
    //   config.data = snakeCaseKeys(config.data)
    // }

    // if (config.params) {
    //   config.params = snakeCaseKeys(config.params)
    // }

    config.baseURL = baseURL

    return config
  },
  reason => {
    SystemModule.loadingEnd()
    return Promise.reject(reason)
  },
)

api.interceptors.response.use(
  response => {
    // if (response.data) {
    //   response.data = camelCaseKeys(response.data, { deep: true })
    // }

    SystemModule.loadingEnd()

    return response
  },
  reason => {
    SystemModule.loadingEnd()
    return Promise.reject(reason)
  },
)

export default api
