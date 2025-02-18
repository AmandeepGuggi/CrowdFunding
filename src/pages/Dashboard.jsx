import React from 'react'
import { useRef, useState, useEffect } from 'react'
import {Video, CustomButton} from '../components'
import { useNavigate } from 'react-router'
import img1 from '../assets/images/image.png'
import img2 from '../assets/images/image2.png'
import { FaFacebook,FaGithub,FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import videoFile from "../Video/video.mp4";


const Dashboard = ({theme}) => {
    const [isLight, setIsLight] = theme;
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate()

    function toggle(i){
        if(selected === i){
          return setSelected(null)
        }
        setSelected(i)
    }
   
  
  return (
    <div className='flex flex-col overflow-hidden gap-10'>

        <div className='w-full text-center' >
        <h1 className={`${isLight?  'text-[#4acd8d]': 'text-white ' } mx-auto my-20 text-5xl max-w-[700px]`} >
        Raising Funds was never this easy. Start a fundraiser in 5 minutes!</h1>
        </div>
        <div className={`${isLight? 'text-[#4b5264]' : 'text-white' } relative`}>
            <h2 className='text-4xl  mb-5' >What is Crowdfunding</h2>
            <p className='text-[20px] mb-3' >In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.</p>
            <img className='mx-auto' width={700} src={img2} alt="image" />
            <img className='z-10 -mt-30 ml-40 sm:z-0 ' width={700} src={img1} alt="image" />
        </div>
        <div id='how-it-works' className={`${isLight? 'text-[#4b5264]' : 'text-white' }`} >
             <h2 className='text-4xl mb-9 text-center'>
             How Crowdfunding Works on Our Blockchain Platform 
             </h2>
             <p className='mb-10' >Let us assume an individual, unfortunately, meets with an accident on the road. His medical expenses and hospital bills start piling up. Now he needs 2.13ETH (₹5 Lakh) to pay his expensive medical bills. Fortunately, his best friend signed up on Ketto’s crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. Now, this campaign can be shared with all his near and dear ones through WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of few minutes, funds start coming in to support the financial needs of the injured friend.</p>


             <div>
            <h2 className='text-3xl mb-5' >Start a campaign in three simple steps</h2>
            <div className='flex flex-col justify-around ' >
               <div className='flex '>
               <div>
                    <img src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?dpr=1.0&amp;q=70&amp;w=100" alt="img" />
                </div>
                <div className='flex flex-col justify-between' >
                    <div>
                        <h4 className='text-[#4acd8d] mb-1.5'>Start your campaign</h4>
                        <p>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                    </div>
                    <div >
                        <h4 className='text-[#4acd8d] mb-1.5'>Share your fundraiser</h4>
                        <p>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
                    </div>
                    <div >
                        <h4 className='text-[#4acd8d] mb-1.5'>Withdraw Funds</h4>
                        <p>The funds will be directly transferred from donar to your account</p>
                        <span className='text-[#4444] text-[14px]'> It will take some time to ETH arrive in your account</span>
                    </div>
                    
                </div>
               </div>
                <div>
                <video className="min-h-36 rounded-lg shadow-lg w-[300px]" autoPlay loop muted >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
                    </video>
                </div>
               
            </div>
             </div>

                <div className='text-center mt-10' >

            <CustomButton 
            btnType="button"
            title="Start a Campaign " 
            handleClick={()=> {
                navigate('/create-campaign')
            }} 
             styles=" bg-[#4acd8d] hover:translate-y[-4px] min-w-[300px] mb-[70px] " 
            />
                </div>


       

                <div id='faq' className='max-w-[1200px] mx-auto' >
                    <h1 className='text-3xl mb-5' >FAQs</h1>
                {faqData.map((item)=> (
            <div key={item.id} className='border-b-1 border-b-[#f5f5f5da]' >
  <div onClick={()=> { toggle(item.id) }}  className={` ${isLight? 'hover:bg-[#F5F5F5]' : 'hover:bg-[#2a242489]' }  
   flex justify-between items-center py-[12px] text-[20px] px-4 ${selected===item.id? 'isLight:bg-[#F5F5F5] bg-[#2a242489] ': ''} `}>
  <h2  >
        {item.question}
    </h2>
    <span>
    {selected===item.id ? '-' : '+'}
    </span>
  </div>
  <div className={` ${selected===item.id? 'block': 'hidden'}`}>
    {/* <p className={`pb-[12px] text-[#2a242489] text-[20px] px-4 ${selected===item.id ? 'content show ' : 'content'}`}>  {item.answer} </p> */}
    <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          selected === item.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className={`pb-[12px]  ${isLight? 'text-[#2a242489]' : 'text-white' } text-[20px] px-4`}>
          {item.answer}
        </p>
      </div>
  </div>
</div>
          ))}
                </div>

                
            
        </div>

        <div id="contact" className='flex gap-[20px] items-center my-[20px]' >
            <div>
                <p className={`text-2xl ${isLight? 'text-black': 'text-white'}`} >Have any questions for us? Chat with our team on Facebook or WhatsApp now.</p>
            </div>
            <div className='flex gap-1.5 sm:flex-wrap' >
                <a target='_blank'
                href="https://wa.me/8104348409?text=Hi, I just checked out your Crowdfunding project can we connect? ">
                <button
      type='button'
      className={`font-epilogue hover:translate-y-[-2px active:translate-y-1 transition-all font-semibold text-[16px] 
        leading-[26px] text-white min-h-[52px] flex items-center justify-around gap-1 
        px-4 rounded-[10px] bg-[#13CB6A] `} 
      onClick={()=>{}}
    >
        <FaWhatsapp />
      chat with us
    </button>
                </a>
                <a href="https://www.facebook.com/Anirudhakolay/" target='_blank'>
                <button
      type='button'
      className={`font-epilogue hover:translate-y-[-2px active:translate-y-1 transition-all font-semibold text-[16px] 
        leading-[26px] text-white min-h-[52px] flex items-center justify-around gap-1 
        px-4 rounded-[10px] bg-[#354E84] `} 
      onClick={()=>{}}
    >
        <FaFacebook />
      chat with us
    </button>
                </a>
            
           
            </div>
        </div>
<footer className='' >
  <div className="mt-6 px-4 bg-[#045452] w-[100%] flex justify-between items-center min-h-25">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/Anirudhakolay/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://github.com/AmandeepGuggi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://x.com/anirudha_kolay" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/anirudha_kolay/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandeep-guggi-a128a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-gray-400">Follow us for updates, news, and more!</p>
      </div>
      <div className="bg-[#073C3B] px-3 ">
      <div className="p-6  rounded-xl  w-full  text-center">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Meet the Team</h2>
        <p className="text-gray-400 mb-4">Built with ❤️ by a passionate team of developers & blockchain enthusiasts.</p>
        
        <div className="flex justify-center gap-1 md:flex-nowrap flex-wrap space-x-6">
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Krushna Mane</p>
            <p className="text-gray-400 text-sm">Blockchain Engineer</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Anirudha Kolay</p>
            <p className="text-gray-400 text-sm">Blockchain Operator & Documentation Lead</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Co-Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Kartik Salunkhe</p>
            <p className="text-gray-400 text-sm">Presentation & Visual Designer</p>
          </div>
          <div className="text-center mr-6">
            <img src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg" alt="UI Designer" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Amandeep Guggi</p>
            <p className="text-gray-400 text-sm">Frontend & UI/UX Developer</p>
          </div>
        </div>
      </div>
      <hr className='' />
      <p className="text-gray-500 text-center py-8 text-sm">© 2024 CrowdFunding Hub | All Rights Reserved</p>
      </div>
</footer>

    </div>
  )
}


const faqData = [
    {
      id: 1,
      question: "How do I raise funds?",
      answer: "Login with Wallet - Fill up form - Hit Submit"
    },
    {
      id: 2,
      question: "Can I raise funds for a friend as well?",
      answer: "Yes, you can also raise funds for a friend, a loved one or anyone in need during life's crucial moments."
    },
    {
      id: 3,
      question: "Does the raised amount reach the individual directly?",
      answer: "Props (short for properties) are used to pass data from a parent component to a child component in React."
    },
    {
      id: 4,
      question: "What is state in React?",
      answer: "With Ketto, the money you collect goes directly to the bank account associated with your fundraising page. Raising money for yourself or anyone has never been easier."
    },
    {
      id: 5,
      question: "Is It safe?",
      answer: " Your Ketto fundraiser features the very best in secure payment encryption technology also 	Immutable transactions stored on blockchain."
    }
  ];

export default Dashboard