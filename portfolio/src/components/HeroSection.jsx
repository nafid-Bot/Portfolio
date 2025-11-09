import React from 'react';
import {ArrowDown} from "lucide-react";

const HeroSection = () => {
    return (
        <section id="hero"
            className={'relative min-h-screen flex flex-col justify-center items-center'}
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className={'text-4xl font-bold md:text-6xl tracking-tight'}>
                        <span className={'opacity-0 animate-fade-in'}>HI there,</span>
                        {" "}
                        <span className={'opacity-0 animate-fade-in-delay-1'} >Welcome to</span>
                        {" "}
                        <span className={'opacity-0 animate-fade-in-delay-2'}>My<span className={'text-primary'}> portfolio</span></span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">                        I create stellar web experiences with modern technologies.
                        Dedicated to crafting products that combine aesthetic appeal with exceptional functionality.
                    </p>

                    <div className={'pt-4 opacity-0 animate-fade-in-delay-3'}>
                        <a href="#projects"     className={'cosmic-button'}>
                            view my works
                        </a>
                    </div>
                </div>

            </div>

            <div className={'absolute bottom-8 transform -translate-x-1/2 z-10 flex flex-col items-center left-1/2 animate-bounce'}>
                <span className={'text-sm text-muted-foreground mb-2'}>scroll</span>
                <ArrowDown className={'h-5 w-5 text-primary'} />
            </div>



            
        </section>
    );
};

export default HeroSection;