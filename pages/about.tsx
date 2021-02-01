import {GetStaticProps} from "next";


export default function About({ title }) {
    return (
        <div></div>
    )
}

export const getStaticProps: GetStaticProps  = async () => {
    return {
        props: {
            title: 'hello world'
        }
    }
}
