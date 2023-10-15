import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((result) => setAllMemes(result.data.memes));
  }, []);

  function handleChange(event) {
    setMeme((prevMeme) => {
      const { name, value } = event.target;
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  }

  return (
    <main className="container my-5 text-white">
      <div className="text-center mb-3">
        <p>Enter Meme Text</p>
      </div>

      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2 border border-secondary"
          id="topTextInput"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control ms-2 border border-secondary"
          id="bottomTextInput"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>

      <div className="text-center mt-4 d-grid gap-2">
        <button
          className="btn btn-success btn-lg btn-block"
          name="submit"
          onClick={getMemeImage}
        >
          Get a new Meme image
        </button>
      </div>

      <div className="text-center mt-4 d-grid gap-2">
        <p>{meme.topText}</p>
        <img
          src={meme.image}
          className="img w-100 h-100 shadow rounded-top"
          alt="grid-image"
        />
        <p>{meme.bottomText}</p>
      </div>

      <pre>{JSON.stringify(allMemes, null, 0)}</pre>
    </main>
  );
}
