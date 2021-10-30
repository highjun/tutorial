import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return <section >
        <h2 >Blog</h2>
        <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                </li>
            ))}
        </ul>
    </section>
}