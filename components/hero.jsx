"use client"
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const HeroSection = () => {
    const imageRef = useRef(null); 


    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100; 

        if(scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
        } else {
            imageElement.classList.remove("scrolled");
        }
        }
        window.addEventListener("scroll", handleScroll);
        return () =>  window.removeEventListener("scroll", handleScroll);;
    }, [])

    

  return (
    <section className='w-full pt-36 md:pt-48  pb-10'>
            <div className='space-y-6 text-center'>
                <div className='space-y-6 mx-auto'>
                    <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl '>Para tu IA coach de carrera
                    <br />
                    Personalizada
                    </h1>
                    <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                        Avanza con tu carrera con guias personalizadas, entrevistas preparadaas y Ai-coaching para mejorar tu desempeño profesional
                    </p>
                </div>
                <div className='flex space-x-2 justify-center'>
                    <Link href='/dashboard'>
                        <Button size="lg" className="px-8 ">
                            Empezar Ahora
                            </Button>
                    </Link>
                    <Link href='/dashboard' >
                        <Button size="lg" variant="outline" className="px-8">
                            Ver mas
                            </Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper mt-5 md:mt-10'>
                    <div ref={imageRef} className='hero-image'>
                        <Image src={'/banner.png'} 
                        alt='hero'
                        width={720}
                        height={420}
                        className='rounded-lg shadow-2xl border mx-auto' 
                        priority
                        />
                    </div>
                </div>
            </div>

    </section>
  )
}

export default HeroSection