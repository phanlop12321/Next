const fetchApi = (path , options = {}) => {
    return fetch(`http://localhost:8080/${path}`, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    // .catch(error => {
    //   throw new Error(error.message || 'Something went wrong');
    // });
}
export default fetchApi