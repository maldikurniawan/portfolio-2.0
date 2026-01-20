import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

type LogoImageProps = {
    src?: string;
    alt?: string;
};

const LogoImage = ({ src, alt }: LogoImageProps) => {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
            onError={() => setImageError(true)}
        />
    );
};

const Exp = () => {
    const DATA = [
        {
            company: "NF Computer",
            href: "https://www.instagram.com/nfacademy_id/",
            location: "Remote",
            title: "Fullstack Web Developer",
            logoUrl: "/assets/logo-nf.png",
            start: "February 2023",
            end: "June 2023",
            description:
                "Completed a comprehensive Fullstack Developer training using Laravel, gaining a deep understanding of web development principles from both frontend to backend. The training covered essential Laravel concepts, API integration, and best practices for building scalable, efficient web applications. I developed the skills necessary to create a robust web-based scheduling system, ensuring seamless functionality and optimized performance throughout the development process.",
        },
        {
            company: "DISKOMINFOTIK Lampung",
            href: "https://diskominfotik.lampungprov.go.id/",
            location: "Onsite",
            title: "Frontend Web Developer",
            logoUrl: "/assets/logo-kominfo.png",
            start: "June 2023",
            end: "August 2023",
            description:
                "Developed an Integrated Competency Development System for State Civil Apparatus (ASN) using the Laravel platform, designed to efficiently manage, track, and enhance the competencies of ASNs within an organization. The system provides a comprehensive solution for fostering continuous professional growth, aligning skills with organizational needs, and ensuring effective competency management for ASNs at all levels.",
        },
        {
            company: "PT. QNN",
            href: "https://qnn.co.id/",
            location: "Remote",
            title: "Programmer",
            logoUrl: "/assets/logo-qnn.png",
            start: "March 2024",
            end: "Present",
            description:
                "As a Programmer at PT Queen Network Nusantara, I built responsive landing pages and customized content management systems (CMS) using ReactJS and Tailwind CSS. I focused on creating user-friendly designs, optimizing performance, and collaborating with teams to deliver seamless and efficient web solutions that supported the companys digital growth.",
        },
    ];

    return (
        <div className="flex min-h-0 flex-col gap-y-6">
            <h2 className="text-xl font-bold">Work Experience</h2>

            <Accordion type="single" collapsible className="w-full grid gap-6">
                {DATA.map((work) => (
                    <AccordionItem
                        key={work.company}
                        value={work.company}
                        className="w-full border-b-0 grid gap-2"
                    >
                        <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                            <div className="flex items-center gap-x-3 justify-between w-full text-left">
                                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                    <LogoImage src={work.logoUrl} alt={work.company} />

                                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                        <div className="font-semibold leading-none flex items-center gap-2">
                                            {work.company}

                                            <span className="relative inline-flex items-center w-3.5 h-3.5">
                                                <ChevronRight
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-300",
                                                        "opacity-0 translate-x-0",
                                                        "group-hover:opacity-100 group-hover:translate-x-1",
                                                        "group-data-[state=open]:opacity-0"
                                                    )}
                                                />
                                                <ChevronDown
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                                                        "opacity-0 rotate-0",
                                                        "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                                                    )}
                                                />
                                            </span>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            {work.title}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-xs tabular-nums text-muted-foreground flex-none">
                                    {work.start} - {work.end ?? "Present"}
                                </div>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                            {work.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Exp;
