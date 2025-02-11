
interface ButtonProps {
  text: string;
  url: string;
}

interface CardCategoryProps {
  title: string;
  icon: string;
  list: string[];
  button: ButtonProps;
}


const CardCategory = ({ title, icon, list, button }: CardCategoryProps) => {
  return (
    <div className="col-span-1 w-full min-w-[180px]">
      <div className="card-box-shadow py-6 rounded-md mb-2 px-4">
        <div className="bg-brick-red-700 w-[90px] h-[90px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center mx-auto mb-2">
          <img src={icon} alt={title} className="w-10 h-10 md:w-16 md:h-16" />
        </div>
        <p className="font-medium text-lg md:text-xl text-boulder-900 text-center mb-4 md:mb-6">{title}</p>
        <div className="mx-auto size-fit">
          <ul>
            {
              list.map((item) => (
                <li className="flex items-center gap-2 text-boulder-500 text-base" >
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5839 4.98627L10.911 4.35598L8.8221 0.425631C8.76504 0.318021 8.67118 0.230907 8.55523 0.177956C8.26444 0.0447236 7.91108 0.15575 7.76568 0.425631L5.67678 4.35598L1.00389 4.98627C0.875054 5.00335 0.757266 5.05972 0.667084 5.14513C0.558059 5.24913 0.497981 5.38905 0.500052 5.53413C0.502122 5.67922 0.566172 5.81762 0.678126 5.9189L4.05902 8.97812L3.26027 13.2979C3.24154 13.3984 3.25352 13.5018 3.29486 13.5962C3.33619 13.6907 3.40523 13.7726 3.49413 13.8325C3.58304 13.8924 3.68826 13.9281 3.79786 13.9353C3.90747 13.9426 4.01707 13.9212 4.11424 13.8735L8.29389 11.8341L12.4735 13.8735C12.5876 13.9299 12.7202 13.9487 12.8472 13.9282C13.1674 13.877 13.3827 13.5951 13.3275 13.2979L12.5288 8.97812L15.9097 5.9189C16.0017 5.8352 16.0624 5.72588 16.0808 5.60632C16.1305 5.3074 15.906 5.03068 15.5839 4.98627Z" fill="#D01443" />
                  </svg>
                  <p>{item}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="block mx-auto mt-6 size-fit">
        <a href={button.url} className="btn btn--md btn-red font-medium">{button.text}</a>
      </div>
    </div>
  )
}

export default CardCategory
