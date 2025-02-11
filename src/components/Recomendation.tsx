
const Recomendation = () => {
  return (
    <div className="bg-brick-red-700 py-6 md:py-14">
      <div className="container mx-auto px-4 max-w-xl text-center text-white">
        <button className="ml-auto block md:hidden mb-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-right">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-base md:text-2xl font-medium mb-5">Recommendations to prevent COVID-19</h2>
        <p className="text-sm md:text-base mb-4">
          The most common way to catch COVID-19 is from close contact with other people. Avoiding gatherings of people and practicing social distancing can help reduce the chances of exposure to the virus.
        </p>
        <a href="#" className="btn btn--md btn--outline-white" aria-label="See more information">See more information</a>
      </div>
    </div>
  )
}

export default Recomendation
