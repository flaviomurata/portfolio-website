type Props = {
  title: string
  subtitle: string
  index: number
  images: string[]
}

const WorkIndexItem = ({ title, subtitle, index, images }: Props) => {
  return (
    <div className="works_index_item relative mb-[3.2rem] h-full cursor-pointer overflow-hidden">
      <div className="works_index_item_text flex w-full justify-between">
        <div className="works_index_item_text_flex inline-flex items-center gap-[3.2rem] max-md:flex-col max-md:items-start max-md:gap-0">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
        <h1>{index}</h1>
      </div>
      <div className="works_index_item_media absolute left-0 top-0 flex gap-[1.6rem]">
        <h1 className="works_index_item_media_arrow">&rarr;</h1>
        <img
          className="works_index_item_media_image h-52 w-[32rem] object-cover"
          src={images[0]}
          alt=""
        />
        <img
          className="works_index_item_media_image h-52 w-[32rem] object-cover"
          src={images[1]}
          alt=""
        />
        <img
          className="works_index_item_media_image h-52 w-[32rem] object-cover"
          src={images[2]}
          alt=""
        />
        <img
          className="works_index_item_media_image h-52 w-[32rem] object-cover"
          src={images[3]}
          alt=""
        />
      </div>
    </div>
  )
}
export default WorkIndexItem
