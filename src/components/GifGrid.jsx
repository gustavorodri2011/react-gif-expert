import { GifItem } from '../components'
import { useFetchGifs } from '../hooks/useFetchGifs'
useFetchGifs

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          // title={image.title}
          // url={image.url}
          />
        ))}
      </div>

    </>
  )
}
