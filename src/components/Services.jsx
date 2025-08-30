import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import ServicesCard from './ServicesCard';

const Services = () => {
    const servicesData = [
        {
            title: "Web Development",
            description: "Building responsive and functional websites.",
            icon: assets.ads_icon,
        },
        {
            title: "Mobile App Development",
            description: "Creating mobile applications for iOS and Android.",
            icon: assets.marketing_icon,
        },
        {
            title: "UI/UX Design",
            description: "Designing user-friendly interfaces and experiences.",
            icon: assets.marketing_icon,
        },
        {
            title: "Digital Marketing",
            description: "Helping you grow with SEO & social campaigns.",
            icon: assets.social_icon,
        }
    ];
  
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-10 dark:hidden' />

        <Title title="How can we help?" desc="We offer a wide range of services to help you grow your business." />

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
                <ServicesCard key={index} service={service} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Services;
