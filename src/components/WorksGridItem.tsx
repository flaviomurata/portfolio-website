type Props = {
  index: number
  title: string
  image: string
  info?: string[]
}

const WorksGridItem = ({ index, title, image, info }: Props) => {
  const isPair = index % 2 === 0

  return (
    <div className={isPair ? 'works_grid_item --item-left' : 'works_grid_item'}>
      <img
        className="works_grid_item_image max-md:h-[64rem] max-md:w-full"
        src={image}
        alt=""
      />
      <div className="works_grid_item_title">
        <h3>{title}</h3>
      </div>
      <div
        className={
          isPair
            ? 'works_grid_item_info md:justify-self-end'
            : 'works_grid_item_info'
        }
      >
        <h2>( {index} )</h2>
        <ul>
          <li>{info?.[0]}</li>
          <li>{info?.[1]}</li>
          <li>{info?.[2]}</li>
        </ul>
      </div>
    </div>
  )
}

export default WorksGridItem
