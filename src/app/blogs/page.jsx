// "use client"
// import React, { useState } from 'react'
// import BlogCard from './BlogCard'

// const page = () => {
//     const blogCategories = ["Culture", "Tech", "Medical", "Weather", "Vloging"]
//     const blogs = [{
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     }, {
//         title: "This blog tells about the Culture",
//         createdAt: "2-9-2023",
//         image: "/dummyBlog.jpg"
//     },]
//     const [active, setActive] = useState("Culture")
//     return (
//         <div className='max-w-[1400px] mx-auto flex flex-col gap-[20px] items-center px-[100px] py-[100px]'>
//             <h2 className='font-bold text-[32px]'>Culture Articles</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet excepturi nam.</p>
//             <div className='flex gap-4'>
//                 {
//                     blogCategories.map((cat) => {
//                         return <button className={`px-4 py-2 ${active === cat ? "bg-blue-900 text-white" : "bg-gray-200 text-black"}`} onClick={() => setActive(cat)}>{cat}</button>
//                     })
//                 }
//             </div>
//             <div className='flex gap-[20px] flex-wrap justify-center'>
//                 {
//                     blogs.map((blog) => {
//                         return <BlogCard blog={blog} />
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default page