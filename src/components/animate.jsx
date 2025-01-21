import { useEffect } from "react";

export default function TenorGifEmbed() {
  useEffect(() => {
    // Dynamically add the Tenor script to the document
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tenor-gif-embed"
      data-postid="2480388323651204539"
      data-share-method="host"
      data-aspect-ratio="0.985944"
      data-width="100%"
      dangerouslySetInnerHTML={{
        __html: `<a href="https://tenor.com/view/happy-birthday-balloons-cupcake-colorful-gif-17285912847382927419">Happy Birthday Balloons GIF</a> from <a href="https://tenor.com/search/happy+birthday-gifs">Happy Birthday GIFs</a>`,
      }}
    />
  );
}
