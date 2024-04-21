import React from 'react'

const Navbar = () => {
  return (
    <nav class="bg-red-500 py-4 px-6 flex justify-between items-center">
    
    <div>
        <span class="text-xl font-bold text-orange-500">Eatly</span>
    </div>


    <div class="hidden md:flex space-x-4 text-white">
        <a href="#" class="hover:text-gray-300">Programs</a>
        <a href="#" class="hover:text-gray-300">Services</a>
        <a href="#" class="hover:text-gray-300">Menu</a>
        <a href="#" class="hover:text-gray-300">Testimonials</a>
    </div>


    <div>
    <button class="bg-orange-500 hover:bg-orange-600 font-semibold py-2 px-4 rounded-md text-black">Let's Talk</button>
    </div>
</nav>

  )
}

export default Navbar