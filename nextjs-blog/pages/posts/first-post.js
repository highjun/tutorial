import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost(){
    return <>
        <Head>
            <title>First Post</title>
        </Head>
        <Link href="/">
            <a>Back to Main Page</a>
        </Link>
    </>
}