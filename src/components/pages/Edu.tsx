import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Edu = () => {
    const DATA = [
        {
            school: "SMPN 2 Bandar Lampung",
            href: "https://smpn2-blampung.sch.id/",
            degree: "-",
            logoUrl: "/assets/logo-spanda.png",
            start: "2014",
            end: "2017",
        },
        {
            school: "SMAN 9 Bandar Lampung",
            href: "https://www.instagram.com/sman9bdl/",
            degree: "-",
            logoUrl: "/assets/logo-smalan.png",
            start: "2017",
            end: "2020",
        },
        {
            school: "Lampung University",
            href: "https://www.unila.ac.id/",
            degree: "Bachelor of Engineering",
            logoUrl: "/assets/logo-unila.png",
            start: "2020",
            end: "2024",
        },
    ];

    return (
        <div className="flex min-h-0 flex-col gap-y-6">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="flex flex-col gap-8">
                {DATA.map((education, index) => (
                    <div
                        key={index}
                    >
                        <Link
                            to={education.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-x-3 justify-between group"
                        >
                            <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                {education.logoUrl ? (
                                    <img
                                        src={education.logoUrl}
                                        alt={education.school}
                                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                                    />
                                ) : (
                                    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                                )}
                                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                    <div className="font-semibold leading-none flex items-center gap-2">
                                        {education.school}
                                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                                    </div>
                                    <div className="font-sans text-sm text-muted-foreground">
                                        {education.degree}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                                <span>
                                    {education.start} - {education.end}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Edu