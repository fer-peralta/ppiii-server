export const options = (post, token) => {
  return {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
}
