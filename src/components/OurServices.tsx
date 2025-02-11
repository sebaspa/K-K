import Family from '../assets/family.jpg'

const OurServices = () => {
  return (
    <div className="py-8 md:py-14 lg:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <div className="w-full md:max-w-md">
              <h4 className='mb-4 text-brick-red-700 font-medium text-center md:text-left text-3xl md:text-2xl'>Our Services</h4>
              <img src={Family} alt="Family" className='mx-auto mb-5 block md:hidden' />
              <p className='text-base font-bold mb-4 text-boulder-500'>
                For over 65 years, we have been recognized as the leading provider of sports, leisure and entertainment insurance products.
              </p>
              <p className='text-base mb-4 text-boulder-500'>
                We perform a variety of traditional insurance company functions on behalf of the insurance companies we represent, allowing us to provide exceptional service in: program development, sales & marketing, underwriting, policy issuance & administration, loss control and claims.
              </p>
              <a href="#" className='btn btn--md btn--outline-red text-brick-red-700 font-medium'>About us</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img src={Family} alt="Family" className='md:ml-auto hiden md:block' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
