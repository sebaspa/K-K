import StartRating from "./rating/StartRating"

const CustomersSaying = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h3 className="text-brick-red-700 text-center font-medium text-xl md:text-2xl mb-10 md:mb-16">What customers are saying</h3>
        <div className="flex">
          <div className="card-box-shadow p-7 rounded-lg">
            <StartRating rating={4} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersSaying
