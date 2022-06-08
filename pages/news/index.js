import Link from "next/link";

function NewsPage() {
    return (
        <>
            <h1>Laman Berita!</h1>
            <ul>
                <li><Link href="/news">NextJS</Link></li>
                <li><Link href="/news/react">ReactJS</Link></li>
                <li>NodeJS</li>
            </ul>
        </>
    )
}

export default NewsPage;