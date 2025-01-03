import { client } from "@/sanity/lib/client"
import BlogCard from "../components/Blogcard"

async function WebDev() {
  const blogs = await client.fetch(`*[_type == "blog" && category == "web-dev"] {
  title,
  shortDescription,
  mainImage,
  tags,
  authorName,
  uploadDate,
  category,
  comments,
  _id
}`,{},{cache: "no-store"})



  return (
    <div className="mx-auto max-w-[1000px] mt-10 px-3">
      {/* Heading */}
      <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left text-cyan-500 font-serif">Understanding Machine Learning and Deep Learning</h1>
      <p className="mt-2 text-gray-200">Introduce the concepts of Machine Learning (ML) and Deep Learning (DL), explaining their significance in todays tech-driven world and how they are reshaping industries.</p>    
      {/* All Blogs */}
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 md:justify-start justify-center gap-4 lg:gap-8">
        {blogs.map((blog:any)=>(
          <BlogCard
          key={blog._id}
          image={blog.mainImage}
          title={blog.title}
          tags={blog.tags}
          shortDesc={blog.shortDescription}
          author={blog.authorName}
          uploadDate={blog.uploadDate}
          category={blog.category}
          id={blog._id}
          />
        ))}

      </div>
    </div>
  )
}

export default WebDev
   
          