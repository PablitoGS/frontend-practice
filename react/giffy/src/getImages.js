export default async function getImages(url) {
  const res = await (await fetch(url)).json()
  res.splice(5)
  const images = res.map(value => {
    const {thumbnailUrl, title} = value
     return {thumbnailUrl, title}
    })
    
  return images
}
