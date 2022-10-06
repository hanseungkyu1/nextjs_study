import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// const API_KEY = "dd696e6b4b5b49c8a2008c68bd75c005";

export default function Home({results}) {
    // const [movies, setMovies] = useState();

    return (
        <div className="container">
            <Seo title="Home" />
            {/* 물음표를 넣으면 만약 movies가 존재하지 않으면 map이 실행되지 않도록 함 */}
            {results?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                </div>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
            `}
            </style>
        </div>
    );
}


// 서버에서 실행 됨(서버사이드), export와 함수명은 무조건 getServerSideProps로 해줘야함
// 이 function은 오직 서버사이드에서만 실행 됨
// 이곳에서 리턴 되는 것은 뭐가 됐건 페이지의 props가 됨
export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

    return {
        props: {
            results,
        },
    };
}