
export const getExample = async (api, option) => {
//   return await API.request(Config.API_URL + '/users/', 'GET')
  const body = {
    key: option
  }
  return api.request.post(api.baseURL + '/xxx')
    .send(body)
    .then((result) => {
      return result.body
    })
}

