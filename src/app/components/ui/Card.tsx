import Image from "next/image"

type CardProps = {
    image: string;
    alt: string;
    text: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ image, alt, text, price}) => {
  return (
      <div className="group flex flex-col text-center p-5 w-[200px] bg-white hover:bg-transparent hover:cursor-pointer">
        <Image src={image} alt={alt} width={200} height={250} className="h-[160px]"></Image>
        <p className="font-bold py-4 text-base">{text}</p>
        {`$${price}`}
        <div className="absolute bg-transparent text-transparent group-hover:bg-red-500 group-hover:text-white hover:text-black px-3 py-1">view</div>
      </div>
  )
}

export default Card