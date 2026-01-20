import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const DATA = {
    name: "Aldi",
    initials: "AD",
    description:
        "I am a full-stack developer specializing in modern web applications. I enjoy building clean, scalable, and high-performance systems.",
    avatarUrl: "/assets/myself.png",
};

const Hero = () => {
    return (
        <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-6 gap-y-6 flex flex-col md:flex-row justify-between">
                <div className="gap-2 flex flex-col order-2 md:order-1">
                    <div
                        className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                        {`Hi, I'm ${DATA.name.split(" ")[0]}`}
                    </div>
                    <div
                        className="text-muted-foreground max-w-150 md:text-lg lg:text-xl">
                        {DATA.description}
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                        <AvatarFallback>{DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Hero