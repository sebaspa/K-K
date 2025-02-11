import CardCustomer from "./cards/CardCustomer"

const CustomersSaying = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-brick-red-700 text-center font-medium text-xl md:text-2xl mb-10 md:mb-16">What customers are saying</h3>
        <div className="w-full overflow-x-auto mx-auto px-2 py-3">
          <div className="flex items-center gap-6 md:gap-12 w-4xl md:w-full">
            <CardCustomer
              rating={4}
              desc="'It's wonderful to call an organization and actually get a pleasant, helpful voice on the line.'"
              img="/src/assets/baily.png"
              name="Bailey H."
            />
            <CardCustomer
              rating={4}
              desc="'Thanks for doing such a good  job!  Nothing is more important than great customer service.'"
              img="/src/assets/jhon.png"
              name="John H."
            />
            <CardCustomer
              rating={4}
              desc="'Thank you so much for your help with my insurance claim!  You were terrific!  It was by far the best customer service I've had in years!'"
              img="/src/assets/martha.png"
              name="Martha R."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomersSaying
