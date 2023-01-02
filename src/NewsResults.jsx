import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export default function NewsResults() {
    const {newsTopic} = useParams();
    const newsApiToken = 'b6ca3be4c1094221b3c260340e055ebf';
    const [results, setResults] = useState({});
    useEffect(() => {
        console.log('Params changed', newsTopic);
        fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&sortBy=popularity&apiKey=${newsApiToken}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return setResults(data)
            })
    }, [newsTopic])

    let output = <></>;

    if (results.status === 'ok') {
        output = results.articles.map((article, index) => {
            return <div className="card mb-3" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                    <p className="card-text">{article.content}</p>
                    <a href={`${article.url}`} target="_blank">View Article</a>
                </div>
            </div>
        })
    }
    return(
        <>
            <h5 className="mt-2">
                {newsTopic} News
            </h5>
            {output}
        </>
    )
}
