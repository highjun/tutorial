import { getAllPostIds, getPostData } from "../../lib/posts"

export default function Post({postData}) {
    return <>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
    </>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    // const postData = getPostData(params.id)
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}