import axios from "axios";
import React, {useState} from 'react'; 

function News (i) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    function getNews () {
        let apiKey = NYT_API_KEY;
        let apinews = `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${apiKey}`;
        axios.get(apinews).then(displayNews);
    }

    function displayNews (response) {
        setTitle(response.data.results[i].title);
        setAuthor(response.data.results[i].byline);
        setDesc(response.data.results[i].abstract);
        setImg(response.data.results[i].media[0]["media-metadata"][0].url);
    }

    return (
        <div>
            <p>{getNews()}</p>
            <p>
                <img
                src = {img}
                alt = "thumnail"
                ></img><br></br>
                "{title}", {author}<br></br>
                Description: {desc}
            </p>
        </div>
    )
}


export default News;