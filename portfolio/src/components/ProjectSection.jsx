import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "SaaS Application for Service Management",
        status: "in-progress",
        description:
            "A full-stack SaaS platform that enables service providers to create, customize, and manage their services while offering clients a seamless booking experience.",
        image: `${import.meta.env.BASE_URL}projects/project1.png`,
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: { url: "#", published: false },
        githubUrl: { url: "#", published: false },
    },
    {
        id: 2,
        title: "Hybrid RAG Assistant",
        status: "active",
        description:
            "An AI-powered coding companion that combines vector search and project file parsing to deliver grounded answers, code suggestions, and debugging help.",
         image: `${import.meta.env.BASE_URL}projects/project2.png`,
        tags: ["Python", "RAG", "Next.js"],
        demoUrl: { url: "#", published: false },
        githubUrl: { url: "https://github.com/nafid-Bot/codeclerk", published: true },
    },
    {
        id: 3,
        title: "E-commerce Platform",
        status: "in-progress",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: `${import.meta.env.BASE_URL}projects/project3.png`,
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: { url: "#", published: false },
        githubUrl: { url: "#", published: false },
    },

    {
        id: 4,
        title: "Anime Discovery Platform with Smart Recommendations",
        status: "active",
        description: "A dynamic web app that lets users search and explore anime using the Jikan API, with trending recommendations powered by Appwrite database tracking user search patterns.",
        image: `${import.meta.env.BASE_URL}projects/project4.png`,
        tags: ["React", "Jikan API", "Appwrite", "Vite"],
        demoUrl: { url: "https://nafid-bot.github.io/project-anime/", published: true },
        githubUrl: { url: "https://github.com/nafid-Bot/project-anime", published: true },
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    {/*tag*/}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                              {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/*content*/}
                                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                </div>


                                {/*Links*/}
                                <div className="space-x-3 mt-auto pt-4">

                                    <div className="flex justify-between items-center mt-auto pt-4">
                                    {/* Demo link */}
                                        <div className={'flex flex-row space-x-3'}>
                                            <a
                                                href={project.demoUrl.published ? project.demoUrl.url : undefined}
                                                target={project.demoUrl.published ? "_blank" : undefined}
                                                className={`text-foreground/80 transition-colors duration-300 ${
                                                    project.demoUrl.published
                                                        ? "hover:text-primary cursor-pointer"
                                                        : "opacity-50 cursor-not-allowed pointer-events-none"
                                                }`}
                                                aria-disabled={!project.demoUrl.published}
                                            >
                                                <ExternalLink size={20} />
                                            </a>

                                            {/* GitHub link */}
                                            <a
                                                href={project.githubUrl.published ? project.githubUrl.url : undefined}
                                                target={project.githubUrl.published ? "_blank" : undefined}
                                                className={`text-foreground/80 transition-colors duration-300 ${
                                                    project.githubUrl.published
                                                        ? "hover:text-primary cursor-pointer"
                                                        : "opacity-50 cursor-not-allowed pointer-events-none"
                                                }`}
                                                aria-disabled={!project.githubUrl.published}
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>

                                        {project.status === "in-progress" && (
                                            <span className="justify-end px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        In Progress
                                        </span>
                                        )}
                                    </div>



                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/machadop1407"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );

};

export default ProjectSection;