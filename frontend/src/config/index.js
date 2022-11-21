const getConfig = () => ({
    headers: {
      contentType: 'application-json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  
  export default getConfig