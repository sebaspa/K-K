import StartRating from "../rating/StartRating"

interface CardCustomerProps {
  rating: number;
  desc: string;
  img: string;
  name: string;
}

const CardCustomer = ({ rating, desc, img, name }: CardCustomerProps) => {
  return (
    <div className="card-box-shadow p-7 pr-4 rounded-lg lg:w-[320px] h-full lg:h-[230px]">
      <StartRating rating={rating} />
      <p className="mt-5 mb-6 text-sm text-boulder-500">
        {desc}
      </p>
      <div className="flex items-center gap-3">
        <img src={img} alt={name} width={36} height={36} className="rounded-full" />
        <p className="text-sm text-boulder-500">{name}</p>
      </div>
    </div>
  )
}

export default CardCustomer
