import {useRouter} from 'next/router'

// domain/news/news-detail
function DetailPage() {
    const router = useRouter();
    router.query.newsId;

    return (
        <h1>PENTING!!</h1>
    )
}

export default DetailPage;