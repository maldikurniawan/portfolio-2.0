import Markdown from "react-markdown";


const DATA = {
    summary:
        "Specializes in React, Next.js, and TypeScript for creating clean and responsive user interfaces, and uses Django to develop secure and scalable backend systems. __Graduated from the University of Lampung (Universitas Lampung) as the second top graduate in Informatics Engineering__, achieving a GPA of __3.83__ and completing the program within __4 years__. __Has 2 years of professional experience working at a software house__, primarily developing landing pages and CMS.",
};


const About = () => {
    return (
        <div className="flex min-h-0 flex-col gap-y-4">
            <h2 className="text-xl font-bold">About</h2>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>
                    {DATA.summary}
                </Markdown>
            </div>
        </div>
    )
}

export default About