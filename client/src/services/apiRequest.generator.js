export const sendRequest = async (method, url, token, data) => {
  try {
    let isGet = method === 'GET'
    let options = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    if (isGet) {
      options = {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    }
    const response = await fetch(url, options)
      .then(resp => resp.json())
      .catch(error => console.log(error))
    return response
  } catch (error) {
    console.error(error)
  }
}
