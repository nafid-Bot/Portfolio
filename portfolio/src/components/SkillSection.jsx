import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 70, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },
    // { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },
    // { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 70, category: "backend" },
    // { name: "Express", level: 75, category: "backend" },
    // { name: "MongoDB", level: 70, category: "backend" },
    { name: "SQL", level: 75, category: "backend" },
    // { name: "GraphQL", level: 60, category: "backend" },
    { name: "PHP", level: 80, category: "backend" },
    { name: "Python", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 75, category: "tools" },
    { name: "Docker", level: 60, category: "tools" },
    { name: "Figma", level: 65, category: "tools" },
    { name: "VS Code", level: 85, category: "tools" },
];

const categories = [
    {name: "All", value: "all"},
    {name: "Frontend", value: "frontend"},
    {name: "Backend", value: "backend"},
    {name: "Tools", value: "tools"},
];

const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const $filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || activeCategory === skill.category
    )
    return (
        <section id='skills' className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">  My </span> Skills
                </h2>

                <div className="mb-8 flex justify-center">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActiveCategory(category.value);
                            }}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                activeCategory === category.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {$filteredSkills.map((skill,key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className={ "text-left mb-4" }>
                                <h3 className={"font-semibold text-lg"}> {skill.name} </h3>
                            </div>

                            <div className={"w-full bg-secondary/50 h-2 rounded-full overflow-hidden"}>
                                <div
                                className={ "bg-primary h-2 rounded-full origin-left animate-[grow_1.5s ease_out]" }
                                style={{width: skill.level + "%"}}
                                />
                            </div>

                            <div className={'text-right mt-1'}>
                                     <span className="text-sm text-muted-foreground">
                                         {skill.level}%
                                     </span>

                            </div>


                        </div>



                    ))}

                </div>


            </div>

        </section>
    );
};

export default SkillSection;