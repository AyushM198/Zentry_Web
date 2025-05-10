import React from 'react'

import { FaDiscord } from 'react-icons/fa'
import { SiRedbubble } from 'react-icons/si'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const links = [
    {href: 'https://www.instagram.com/zenrygame/', label: 'Instagram', icon: <RiInstagramLine className='text-2xl' />},
    {href: 'https://discord.gg/zenrygame', label: 'Discord', icon: <FaDiscord className='text-2xl' />},
    {href: 'https://www.facebook.com/zenrygame', label: 'Facebook', icon: <FaFacebookF className='text-2xl' />},
    {href: 'https://twitter.com/zenrygame', label: 'Twitter', icon: <FaTwitter className='text-2xl' />},
    {href: 'https://www.twitch.tv/zenrygame', label: 'Twitch', icon: <FaTwitch className='text-2xl' />},
    {href: 'https://www.youtube.com/@zenrygame', label: 'YouTube', icon: <FaYoutube className='text-2xl' />},
]


const Footer = () => {
    return (
        <footer className='w-screen bg-violet-300 py-4 text-black '>
            <div className='container mx-auto flex flex-col items-center justify-between px-4 py-8 md:flex-row gap-y-2'>
                <p className='text-center text-sm font-light'>
                    &copy; 2023 Zenry. All rights reserved.
                </p>
                <div className='flex justify-center gap-4 md:justify-start'>
                    {links.map((link) => (
                        <a key ={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className='text-black hover:text-white transition-colors duration-500 ease-in-out'>
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href='#privacy-policy' className=' text-center text-sm  hover:underline md:text-right'>
                    Privacy Policy

                </a>
            </div>
        </footer>
    )
}

export default Footer
