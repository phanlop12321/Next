const fetchApi = (path , options = {method:"GET"}) => {
    return fetch(`http://localhost:8080/${path}`, options)
    .then(response => {
        console.log(response)
      if (response.ok) {
        return options?.method == "GET" ? response.json():response.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch(error => {
      throw new Error(error.message || 'Something went wrong');
    });
}
export default fetchApi