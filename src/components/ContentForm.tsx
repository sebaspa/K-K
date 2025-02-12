import ContactForm from "./forms/ContactForm"

const ContentForm = () => {
  return (
    <div className="pb-20">
      <div className="container mx-auto max-w-6xl -mt-[320px]">
        <div className="flex flex-col md:flex-row gap-12 bg-white">
          <img src="/src/assets/vertical-family.jpg" className="hidden md:block" />
          <img src="/src/assets/horizontal-family.jpg" className="block md:hidden" />
          <h3 className="font-bold text-brick-red-700 text-4xl px-6 block md:hidden">Get A Free Quote Here</h3>
          <div className="w-full pt-0 md:pt-10 pb-4 px-6 lg:px-12 bg-white">
            <h3 className="font-bold text-brick-red-700 text-2xl text-center mb-10 hidden md:block">Book Appointment</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentForm
