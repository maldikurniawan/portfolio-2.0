import { useEffect } from "react";

export const catConfig = {
    enabled: true,
};

export default function OnekoCat() {
    useEffect(() => {
        if (!catConfig.enabled) return;

        const script = document.createElement("script");
        script.src = "/oneko/oneko.js";
        script.setAttribute("data-cat", "/oneko/oneko.gif");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
