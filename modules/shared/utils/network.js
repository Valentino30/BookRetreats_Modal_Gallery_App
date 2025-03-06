export const get = async (url, options = {}) => {
  try {
    const response = await fetch(url, { ...options })

    const parsedResponse = await parseFetchResponse(response)

    return parsedResponse
  } catch (error) {
    return { error, statusCode: 500, ok: false }
  }
}

export const parseFetchResponse = async (response) => {
  const data = await response.json()

  if (response.ok) {
    return { data, statusCode: 200, ok: true }
  }

  if (response.status > 200 && response.status < 408) {
    return { statusCode: 404, ok: false }
  }

  const { exception } = data
  return { error: exception, statusCode: 500, ok: false }
}
