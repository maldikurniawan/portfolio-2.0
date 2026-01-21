import { Globe } from "lucide-react";
import { ProjectCard } from "../ui/project-card";

const Project = () => {
    const DATA = [
        {
            title: "Templateku",
            href: "https://templateku.vercel.app",
            dates: "Oct 2025 - Jan 2026",
            active: true,
            description:
                "A scalable dashboard template inspired by the Vristo UI. It features a clean, structured layout architecture with reusable components, optimized for maintainability and rapid development of admin panels, SaaS dashboards, and enterprise applications.",
            technologies: [
                "React",
                "Typescript",
                "TailwindCSS",
                "Headless UI",
                "Framer Motion",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://templateku.vercel.app",
                    icon: <Globe className="size-3" />,
                },
            ],
            image: "/assets/project-templateku.gif",
            video: "",
        },
        {
            title: "Animiru",
            href: "https://animiru.vercel.app",
            dates: "Aug 2025 - Dec 2025",
            active: true,
            description:
                "An anime streaming web application built using Next.js, Tailwind CSS, and TypeScript. It focuses on performance, clean UI, and usability, enabling users to easily browse and stream anime content.",
            technologies: [
                "Next.js",
                "Node.js",
                "Typescript",
                "TailwindCSS",
                "Headless UI",
                "Framer Motion",
                "Artplayer.js",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://animiru.vercel.app",
                    icon: <Globe className="size-3" />,
                },
            ],
            image: "/assets/project-animiru.gif",
            video: "",
        },
        {
            title: "RoastingGram",
            href: "https://roastingan.vercel.app",
            dates: "Mar 2025 - Apr 2025",
            active: true,
            description:
                "A web application for roasting Instagram accounts based on scraped profile data. Built with Next.js, Tailwind CSS, and TypeScript, using OpenRouterAI and Apify. Provides AI-generated roast results through a clean and user-friendly interface.",
            technologies: [
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "Apify",
                "OpenRouter",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://roastingan.vercel.app",
                    icon: <Globe className="size-3" />,
                },
            ],
            image: "/assets/project-roastgram.gif",
            video: "",
        },
        {
            title: "Hack Template",
            href: "https://heker.vercel.app",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "A hacker-themed dashboard template built with React, TypeScript, and Tailwind CSS. Features a modern cyberpunk aesthetic with clean layouts and reusable components, suitable for admin panels, internal tools, and tech-focused applications.",
            technologies: [
                "React",
                "Typescript",
                "TailwindCSS",
                "Headless UI",
                "Framer Motion",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://heker.vercel.app",
                    icon: <Globe className="size-3" />,
                },
            ],
            image: "/assets/project-heker.gif",
            video: "",
        },
    ];

    return (
        <div className="flex min-h-0 flex-col gap-y-8">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div
                        className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                    />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">My Projects</span>
                    </div>
                    <div
                        className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                    />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                        I&apos;ve worked on a variety of projects, from simple
                        websites to complex web applications. Here are a few of my
                        favorites.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr">
                {DATA.map((project, index) => (
                    <div
                        key={index}
                        className="h-full"
                    >
                        <ProjectCard
                            href={project.href}
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project