import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUp, Home } from "lucide-react";
import { FaGithub, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

export default function Navbar() {
    const DATA = {
        navbar: [
            { href: "/", icon: Home, label: "Home" },
        ],
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/maldikurniawan",
                icon: FaGithub,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/aldiknn/",
                icon: FaLinkedin,
                navbar: true,
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/aldiknn_",
                icon: FaInstagram,
                navbar: true,
            },
            GitLab: {
                name: "GitLab",
                url: "https://gitlab.com/maldikurniawan",
                icon: FaGitlab,
                navbar: true,
            },
        },
    };

    return (
        <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center">
            <div className="flex items-center gap-2 rounded-2xl border bg-card/90 backdrop-blur px-3 py-2 shadow">
                {DATA.navbar.map((item) => {
                    return (
                        <Tooltip key={item.href}>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
                                >
                                    <ArrowUp className="h-5 w-5" />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">{item.label}</TooltipContent>
                        </Tooltip>
                    );
                })}

                <Separator orientation="vertical" className="h-6" />

                {Object.entries(DATA.social)
                    .filter(([_, s]) => s.navbar)
                    .map(([name, social]) => {
                        const Icon = (social.icon) as any;
                        return (
                            <Tooltip key={name}>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">{name}</TooltipContent>
                            </Tooltip>
                        );
                    })}

                <Separator orientation="vertical" className="h-6" />

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-muted">
                            <ModeToggle className="cursor-pointer" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">Theme</TooltipContent>
                </Tooltip>
            </div>
        </div>
    );

}