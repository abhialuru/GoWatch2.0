import { useRef } from "react";
import { toast } from 'react-toastify';


 
function Contact() {

    const formSub = useRef<HTMLFormElement>(null);

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault(); 
        toast.success('Recieved!')
         formSub.current?.reset();
    }


  return (
    <div id="contact" className="w-full h-screen flex flex-col justify-between bg-white text-black sticky top-0 z-10"> 
    <div className="w-full flex justify-center text-3xl font-semibold mt-10">
        Contact Us!
    </div>

   <form ref={formSub} className='max-w-2xl mx-auto p-4' onSubmit={handleSubmit} >
            <div className='flex flex-col md:flex-row md:space-x-2'>
            <div className='w-full md:w-1/2 pb-2' >
                Name
                <input className='w-full border-gray-300  border-2 px-2 py-1 mt-2 text-black text-lg rounded-md' type="name" name='name' placeholder='Enter Your Name' required/>
            </div>
            <div className='w-full md:w-1/2' >
                 Email
                <input className='w-full border-gray-200 border-2 px-2 py-1 mt-2 text-black text-lg rounded-md ' type="email" name='email' placeholder='Enter Your Email' required/>
            </div>
            </div>
            <div className='h-26 py-1'>
                Message
                 <textarea className='w-full h-48 border-gray-300 border-2 px-2 py-1 text-black  mt-2 text-lg rounded-md resize-none'
                name="Message" placeholder='Message...' required></textarea>
            </div>
            <div className='flex justify-center p-4'>
            <button    className='bg-blue-500 py-2 px-4 text-white text-center rounded' type='submit' >send message</button>
            </div>
        </form>


        <div className="text-white bg-gray-700 p-5 flex justify-center">
            <p>Copyright &copy;2024, Designed by abhialuru.</p>
        </div>
    </div>
   )
}

export default Contact