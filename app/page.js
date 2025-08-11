import HeroSection from "./../components/hero";
import { features } from "./data/features";
import  { howItWorks } from "./data/howItWorks";
import { testimonial } from "./data/testimonial";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";


import { faqs } from "./data/faqs";
import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from "./../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../components/ui/accordion"



export default function Home() {
  return (
    <div>
      <div className="grid-background">
      </div>
        <HeroSection />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Poderosas soluciones para to crecimiento profesional</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                return  (
                  <Card key={index} 
                  className="border-2 hover:border-primary transition-colors duration-300">
                    <CardHeader>
                      <CardTitle>{feature.icon}</CardTitle>
                      <CardDescription className="text-xl font-bold mb-2">{feature.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                      <CardAction>
                        <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                      </CardAction>
                    </CardContent>
                  </Card>
                )
              })}
             </div>
           </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Industrias atendidas</p>
                </div>

                 <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-3xl font-bold">100+</h3>
                  <p className="text-muted-foreground">Preguntas de entrevistas</p>
                </div>

                 <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-3xl font-bold">95%</h3>
                  <p className="text-muted-foreground">Satisfacción del cliente</p>
                </div>

                 <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p className="text-muted-foreground">Ia Support</p>
                </div>

              </div>
            </div>
        </section>



        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">
              Como Funciona
              </h2>
              <p className="text-muted-foreground ">Cuatro simples pasos para acelerar tu carrera profesional</p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => {
                return  (
                  <div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-4"
                  >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                      </div>
                      <h3 className="font-semibold text-xl">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                  </div>    
                )
              })}
             </div>
           </div>
        </section>
        

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Que dicen nuestros clientes</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonial.map((item, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6 ">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={item.image}
                            alt={item.author}
                            className="rounded-full object-cover border-2 border-primary/20" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.role}
                          </p>
                          <p className="text-sm text-primary">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">
                            &quot;
                          </span>
                          {item.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
             </div>
           </div>
        </section>



         <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground ">Encuentra las respuestas a las preguntas más comunes</p>
            </div>
             <div className="max-w-6xl mx-auto">
                  <Accordion type="single" collapsible>
              {faqs.map((faq, index) => {
                return  (
                 <AccordionItem value={`item-${index}`} key={index}>
                   <AccordionTrigger>{faq.question}</AccordionTrigger>
                   <AccordionContent>{faq.answer}</AccordionContent>
                 </AccordionItem>
                )
              })}
            </Accordion>
             </div>
           </div>
        </section>




        <section className="w-full">
           <div className="mx-auto py-4   rounded-lg">
            <div className="flex flex-col  items-center justify-center space-y-4  text-center max-w-3xl mx-auto ">
              <div className="gradient-title">
             <h2 className="text-3xl  font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Listo para acelarar tu carrera profesional
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl ">
                Unete a miles de profesionales quienes estan avanzando sus carreras con Ai-Powered Carrer Guidance
              </p>
              </div>
              <Link href="/dashboard" passHref>
               <Button
               size="lg"
               variant="secondary"
               className="h-11 mt-5 animate-bounce font-semibold text-white dark:text-black bg-primary hover:bg-primary/80 hover:text-primary-foreground"
               >
                Empieza tu viaje Hoy <ArrowRight  className="ml-2 h-4 w-4"/> 
               </Button>
              </Link> 
            </div>
           </div>
        </section>



    </div>
  );
}
