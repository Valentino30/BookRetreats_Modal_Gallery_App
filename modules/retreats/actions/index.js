const API_URL = process.env.API_URL

import { get } from '@/modules/shared/utils/network'

export const getRetreat = async ({ slug }) => {
  return get(
    `${API_URL}/retreats/${slug}`
  )
}
