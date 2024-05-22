
import Image from 'next/image'
import React from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import Link from 'next/link'
import data from './project'

export async function generateStaticParams() {
    const posts = data
    let keys = Object.keys(posts);
    return keys.map((key) => ({
        name: key
    }))
}

const page = ({ params }) => {
    const project = data[params.name];
    if (!project) {
        return (
            <div className="container py-5 text-center">
                <Image src="error.png" width={500} height={500} alt="error" />
            </div>
        );
    }

    return (
        <>
            <div className="container py-5">
               
                <div className="product pt-5 pb-3">
                    <h1>{project.name}</h1>
                </div>
                

            </div>
        </>
    )
}



// export async function generateStaticParams() {
//     const projects = data
//     return projects.map((project) => ({
//     name: project.name,
//     }))
// }


export default page