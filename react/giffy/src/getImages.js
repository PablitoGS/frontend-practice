export default function getImages(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      data.splice(5)
      const images = data.map(value => {
        const {thumbnailUrl, title} = value
        return {thumbnailUrl, title}
      })

      return images
    })
}
