import React from 'react';
import {Briefcase, Code, User, Layers } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className={'py-24 px-4 relative'}>
            <div className={'container mx-auto max-w-5xl'}>
                <h2 className={'text-3xl md:text-4xl font-bold mb-12 text-center'}>
                    About <span className={'text-primary '}>Me</span>
                </h2>

                <div className={'grid grid-cols-1 md:grid-cols-2 item-center gap-12'}>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">
                            Software Developer
                        </h3>

                        <p className="text-muted-foreground">
                            With over 3 years of experience in software development, I specialize
                            in creating responsive, accessible, and performant web
                            applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
                                {" "}
                                Download CV
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className={'gradient-border p-6 card-hover'}>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className={'h-6 w-6 text-primary'}/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={'gradient-border p-6 card-hover'}>
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building robust front-end and back-end systems with modern technologies.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={'gradient-border p-6 card-hover'}>
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className={'h-6 w-6 text-primary'}/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </div>

        </section>
    );
};

export default AboutSection;