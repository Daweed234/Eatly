import React from 'react';
const Test = () => {
  return (
    // leftside
    <div className='flex flex-row gap-20 mt-64 ml-20 h-screen'>
      <div className='flex flex-col'>
      <div className='text-3xl mb-6'>Tell us what you think about us</div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 px-6 py-3 block w-full border-gray-300 border-2 rounded-md" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 px-6 py-3 block w-full border-gray-300 border-2 rounded-md" placeholder="Enter your email" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md resize-none border-2" placeholder="Enter your message"></textarea>
        </div>
        <div className="flex items-center gap-6">

          <button className="bg-purple-400  text-white px-9 py-2 rounded-md hover:bg-purple-500 ">Send</button>

        </div>
      </div>
      </div>

      {/* right side */}
      <div>
        <div>
          <p className='text-3xl font-semibold'>Testimonials</p>
        </div>
        <div className='bg-purple-200 w-[500px] rounded-lg mt-8'>
          <div className='flex flex-col justify-center ml-10'>
            <p className='mt-6 text-lg font-medium'>In the smallest case we have always give you best, find out what other users</p>
            <p className='mt-8 text-sm italic text-purple-600'>“Eatly really helps me to maintain food intake, is perfect for <br />
              those of you, who want to diet or just make the body more <br />
              healthy, In addition Eatly helped me to create a menu <br />
              that is suitable for the family.”</p>
            <p className='mt-8 font-bold text-xl text-purple-600'> Rara Sanchez</p>
            <p className='mt-8 mb-8'>Freelancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;