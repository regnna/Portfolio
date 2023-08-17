import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import resume from '.../public/resume.pdf'

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <> Linkedin <FaLinkedin size={30}/> </>
            ),
            href: 'https://www.linkedin.com/in/ritmchattrg/',
            style: 'rounded-tr-md',

        },
        {
            id:2,
            child:(
                <> Github <FaGithub size={30}/> </>
            ),
            href: 'https://github.com/regnna',
            style: 'rounded-tr-md rounded-br-md',

        },
        {
            id:3,
            child:(
                <> Mail <HiOutlineMail size={30}/> </>
            ),
            href: 'mailto:ritmchats@gmail.com',
            style: 'rounded-tr-md rounded-br-md',

        },
        {
            id:4,
            child:(
                <> Resume <BsFillPersonLinesFill size={30}/> </>
            ),
            href: '/Resume 23.7.23.pdf',
            style: 'rounded-br-md',
            download: true,

        },

    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-13  fixed ">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  `flex justify-between items-center w-40 h-14 px-4 ml-[-7vw] hover:ml-[-.7vw] hover:rounded-md duration-300 bg-gray-500 
                  ${style}`
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white ml-5"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default SocialLinks;
    