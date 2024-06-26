import React from 'react'


const Hero = () => {
  return (
    <div className='font-roboto mt-28 ml-20'>
        <div className=''>

            <p className='text-5xl'>Changing <br /> your <span className='text-orange-600'>eating</span> <br />habits</p>
            <p className='mt-8 mb-8'>Always take care of your health starting from <br />the food menu that you consume everyday</p>

            <div className='flex gap-10'>
            <button class="bg-orange-500 hover:bg-orange-600 font-semibold py-2 px-4 rounded-md text-black">Let's Talk</button>
            <button class="bg-transparent  font-semibold py-2 px-4 rounded-md text-black hover:-translate-y-3 duration-200">Play Video</button>
            </div>
        </div>
    </div>
  )
}

export default Hero