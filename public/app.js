const { axios } = window

document.getElementById('addMovie').addEventListener('click', => {
  event.preventDefault()

  axios.post('/api/movies', {
    title: document.getElementById('')
  })
})