import CoupleMountain from "../assets/couple-montain.jpg"

const MainBanner = () => {
  return (
    <section className="py-10 md:pt-10 md:pb-24">
      <div className="container mx-auto px-4 max-w-7xl hidden md:block">
        <div className="grid grid-cols-12 gap-4 lg:gap-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-brick-red-700 text-4xl lg:text-6xl font-extrabold mb-7 lg:leading-20">Be safe wherever you go with K&K</h1>
            <div className="max-w-80">
              <p className="text-boulder-600 text-base mb-4">
                We provide insurance for Life & Health, Cars & Transport, Travel and more. Also services for the motorsports, sports, leisure, recreation and event industries since 1952.
              </p>
              <a href="#" className="btn btn--md btn-red font-medium">Get a Quote</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img src={CoupleMountain} alt="couple mountain" className="w-full bg-cover h-auto" />
            <div className="mt-7 mx-auto size-fit">
              <ul className="flex items-center gap-4 text-boulder-500 text-sm">
                <li>
                  <b>Phone </b> 1-800-637-4757
                </li>
                <li>
                  <b>Fax </b> 1-866-463-3230
                </li>
                <li>
                  <b>Claims </b> 1-800-237-2917
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${CoupleMountain})` }} className="relative h-[380px] bg-cover bg-center block md:hidden">
        <div className="container px-4 max-w-[280px]">
          <h1 className="text-brick-red-700 text-3xl font-extrabold mb-4 pt-6">Be safe wherever you go with K&K</h1>
          <div className="rounded-lg p-2 bg-boulder-500/40">
            <p className="text-sm text-white font-medium">
              We provide insurance for Life & Health, Cars & Transport, Travel and more. Also services for the motorsports, sports, leisure, recreation and event industries since 1952.
            </p>
          </div>
          <a href="#" className="btn btn--md btn-red font-medium text-xl mt-4">Get a Quote</a>
        </div>
        <div className="pl-3 sm:pl-4 w-full absolute bottom-0 bg-boulder-500/40 py-2">
          <ul className="flex items-center gap-1 text-white text-[10px]">
            <li>
              <b>Phone </b> 1-800-637-4757
            </li>
            <li>
              <b>Fax </b> 1-866-463-3230
            </li>
            <li>
              <b>Claims </b> 1-800-237-2917
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
