import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, 'The name must be at least 3 characters'),
  email: z.string().email('Invalid Email'),
  department: z.string().refine((value) => value !== '', {
    message: 'Select a department',
  }),
  time: z.string().refine((value) => value !== '', {
    message: 'Select a option time',
  }),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [sendedMessage, setsendedMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setTimeout(() => {
      console.log('Form data:', data);
      setsendedMessage(true);
      reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="label--red">Name *</label>
        <input type="text" id="name" {...register('name')} className="input--text" />
        {errors.name && <p className="text-xs text-brick-red-700">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="label--red">Email address *</label>
        <input type="email" id="email" {...register('email')} className='input--text' />
        {errors.email && <p className='text-xs text-brick-red-700'>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="department" className='label--red'>Department *</label>
        <select id="department" {...register('department')} className='input--select'>
          <option value="">Please select</option>
          <option value="opcion1">Option 1</option>
          <option value="opcion2">Option 2</option>
          <option value="opcion3">Option 3</option>
        </select>
        {errors.department && <p className='text-xs text-brick-red-700'>{errors.department.message}</p>}
      </div>

      <div>
        <label htmlFor="time" className='label--red'>Time *</label>
        <select id="time" {...register('time')} className='input--select'>
          <option value="">Please select</option>
          <option value="opcion1">Option 1</option>
          <option value="opcion2">Option 2</option>
          <option value="opcion3">Option 3</option>
        </select>
        {errors.time && <p className='text-xs text-brick-red-700'>{errors.time.message}</p>}
      </div>

      <button type="submit" className="bg-brick-red-700 text-white text-center block w-full px-4 py-2 rounded-sm mt-5">Book Appointment</button>

      {sendedMessage && <p className="bg-green-500 text-white py-2 px-2 text-sm mt-5">Message sent!</p>}
    </form>
  )
}

export default ContactForm
