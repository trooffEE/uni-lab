import { AxiosResponse, Method } from 'axios'

import api from '@/utils/services/api'

type QueryParams = { [key: string]: any }

// Используется, если типы и запросы генерируются на стороне бэка

export interface RequestArgs extends RequestInit {
  loading?: boolean,
  params?: QueryParams | null,
}

export async function request<T> (url: string, rest: RequestArgs): Promise<AxiosResponse<T>> {
  return api({
    data: rest.body,
    headers: rest.headers,
    method: (rest.method as Method),
    params: {
      ...rest.params,
      loading: rest.loading,
    },
    url,
  })
}
