import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>

      <form action="https://getform.io/f/avreokoa" method='post' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
        <p data-aos="fade-up" className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
        <p data-aos="fade-up" data-aos-delay="100" className='text-gray-300 py-4'>Fill the form below and send me a email </p>
        </div>

        <input data-aos="fade-up" data-aos-delay="200" className='bg-[lightblue]' type="text" placeholder='Name' name='name' />
        <input data-aos="fade-up" data-aos-delay="300" className='my-4 p-2 bg-[lightblue]' type="email" placeholder='Email' name='emai' />
        <textarea data-aos="fade-up" data-aos-delay="400" className='bg-[lightblue] px-2' name="message" rows={10} placeholder='Message' id=""></textarea>

        <button data-aos="fade-up" data-aos-delay="500" className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Hit me up for work</button>
      </form>
      
    </div>
  )
}

export default Contacts
