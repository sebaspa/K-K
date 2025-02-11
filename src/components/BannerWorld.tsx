import imageWorld from '../assets/world.png'

const BannerWorld = () => {
  return (
    <div className="bg-brick-red-700 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className='w-full md:max-w-md'>
              <h2 className="text-4xl font-bold text-white mb-8 md:mb-4">We Have Branches All Over The World</h2>
              <p className='text-sm text-white'>
                The gradual accumulation of information about atomic and
                small-scale behaviour during the first quarter of the 20th
                century, which gave some indications about how small things
                do behave, produced an increasing confusion which was
                Heisenberg, and Born.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img src={imageWorld} alt="world" className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerWorld
