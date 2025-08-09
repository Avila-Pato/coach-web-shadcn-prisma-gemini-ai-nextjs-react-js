import HeroSection from "./../components/hero";
import { features } from "./data/features";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle }
from "./../components/ui/card";


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
    </div>
  );
}
