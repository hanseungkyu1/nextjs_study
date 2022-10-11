import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || [];

    return (
        <div>
            <Seo title={title} />
            {/* 홈페이지에서 영화를 직접 클릭했을 때만 제목이 보임 */}
            {/* <h4>{router.query.title || "Loading..."}</h4> */}
            <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({params:{params}}) {
    return {
        props: {
            params,
        },
    }
}