import { FaLaravel, FaPython, FaReact } from "react-icons/fa6";
import { SiDjango, SiExpo, SiMysql, SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

const Skill = () => {
    const DATA = [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Python", icon: FaPython },
        { name: "Django", icon: SiDjango },
        { name: "Laravel", icon: FaLaravel },
        { name: "Expo", icon: SiExpo },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
    ]

    return (
        <div className="flex min-h-0 flex-col gap-y-4">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {DATA.map((skill, index) => (
                    <div key={index}>
                        <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                            {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                            <span className="text-foreground text-sm font-medium">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill