const API_URL = process.env.API_URL

import { stringifyQuery } from '@/modules/shared/utils/jsUtils'
import { get } from '@/modules/shared/utils/network'

export const searchRetreats = async ({ params }) => {
  return get(
    `${API_URL}/retreats/search?${stringifyQuery(params)}`
  )
}
