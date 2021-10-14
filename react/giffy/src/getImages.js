const apiURL = 'https://jsonplaceholder.typicode.com/photos'

export default function getImages(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      data.splice(6)
      const images = data.map(item => {
        const {thumbnailUrl, title} = item
        return {thumbnailUrl, title}
      })

      return images
    })
}
