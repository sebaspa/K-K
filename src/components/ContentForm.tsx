import ContactForm from "./forms/ContactForm"

const ContentForm = () => {
  return (
    <div className="pb-20">
      <div className="container mx-auto max-w-6xl -mt-[320px]">
        <div className="flex gap-12 bg-white">
          <img src="/src/assets/vertical-family.jpg" />
          <div className="w-full pt-10 pb-4 px-12 bg-white">
            <h3 className="font-bold text-brick-red-700 text-2xl text-center mb-10">Book Appointment</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentForm
