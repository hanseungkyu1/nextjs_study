import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            {/* 아래의 Component 블라블라가 children임 */}
            <Component {...pageProps} />
        </Layout>
    );
}