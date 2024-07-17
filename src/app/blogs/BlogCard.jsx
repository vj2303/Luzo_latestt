import React from 'react'

const BlogCard = ({ blog }) => {
    return (
        <div className='w-[30%] border flex flex-col gap-[10px]'>
            <img src={blog.image} alt={blog.title} className='w-full' />
            <p className='font-semibold '>{blog.title}</p>
            <p>{blog.createdAt}</p>
        </div>
    )
}

export default BlogCard