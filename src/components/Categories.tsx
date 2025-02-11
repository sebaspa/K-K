import CardCategory from "./cards/CardCategory"
import plane from '../assets/plane.svg'
import hearth from '../assets/hearth.svg'
import car from '../assets/car.svg'

const Categories = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h4 className="text-brick-red-700 text-center text-2xl mb-5 font-medium">Find the ideal insurance for you</h4>
        <div className="w-full lg:w-4xl overflow-x-auto mx-auto">
          <div className="flex gap-8 md:gap-12">
            {
              <>
                <CardCategory
                  title="Travel"
                  icon={plane}
                  list={["Bullet one", "Bullet two", "Bullet three"]}
                  button={{ text: 'View Details', url: '#' }}
                />
                <CardCategory
                  title="Life & Health"
                  icon={hearth}
                  list={["Bullet one", "Bullet two", "Bullet three"]}
                  button={{ text: 'View Details', url: '#' }}
                />
                <CardCategory
                  title="Cars & Transport"
                  icon={car}
                  list={["Bullet one", "Bullet two", "Bullet three"]}
                  button={{ text: 'View Details', url: '#' }}
                />
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
