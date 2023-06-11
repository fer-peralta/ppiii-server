export const options = post => {
  return {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
