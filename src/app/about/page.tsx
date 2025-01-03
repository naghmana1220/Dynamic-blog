import BlogCard from "../components/Blogcard"
import NewsLetter from "../components/NewsLetter"
import { client } from "@/sanity/lib/client"

async function About() {
    const blogs = await client.fetch(`*[_type == "blog" && (category == "web-dev" || category == "app-dev")] {
      title,
      shortDescription,
      mainImage,
      tags,
      authorName,
      uploadDate,
      category,
      _id
    }`,{},{cache: "no-store"})
    const randomBlogs = blogs.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className=" mt-[60px] mb-[100px] bg-slate-600">
    {/* About Section */}
    <div className="max-w-[600px] mx-auto px-3">
      {/* Heading */}
      <h1 className="font-bold text-4xl md:text-5xl text-center text-cyan-500 font-serif">ABOUT ME</h1>

      {/* Paragraph*/}
      <p className="mt-12 text-center sm:text-start text-gray-300">
      Welcome to my blog! I am passionate about the exciting world of Machine Learning and Deep Learning, where data meets innovation. 
        With a background in computer science, I have always been fascinated by 
        how intelligent algorithms can transform complex information into actionable insights. Through this blog, I aim to demystify the
         concepts of machine learning and deep learning, sharing my knowledge and experiences while exploring the latest trends, applications,
          and breakthroughs in the field. Whether you are a beginner curious about the basics or a seasoned professional looking to stay updated,
           my goal is to provide you with clear explanations, practical examples, and valuable resources to enhance your understanding of these 
           powerful technologies. 
        Join me on this journey as we uncover the limitless possibilities that machine learning and deep learning have to offer!
      </p>

      {/* Image */}
      {/* <Image src={"/images/Naghmana.png"} alt="Blog Image" width={300} height={300} className="object-cover mx-auto h-[306px] rounded-xl mt-12"></Image>

       */}

      <p className="mt-9 text-center sm:text-start text-gray-300">As a full-stack developer, I was always on the lookout for the latest and greatest tools to help me build killer web apps. After hours of research and countless experiments, I finally settled on using React, TypeScript, and NextJS in my projects.With React, I was able to whip up user interfaces faster than a rat in a maze. TypeScript, on the other hand, kept my code clean and error-free, like a freshly-mopped floor. <br /> <br />

      NextJS, meanwhile, allowed me to build blazing fast web apps that were as scalable as a rubber band. It was like having a superpower that let me conquer any project that came my way. <br /> <br />

      Overall, using React, TypeScript, and NextJS in my development projects made me feel like a superhero, ready to take on any challenge and build the most amazing web apps the world has ever seen.</p>
    </div>

    {/* Blogs Section*/}
    <div className="max-w-[1000px] mx-auto mt-20">
      {/* <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">FROM THE BLOG</h1> */}
      
      <div className="mt-10 mb-20 flex flex-wrap md:flex-nowrap md:justify-start justify-center gap-4 lg:gap-12">
      {randomBlogs.map((blog:any)=>(
            <BlogCard
            key={blog._id}
            title={blog.title}
            image={blog.mainImage}
            shortDesc={blog.shortDesc}
            author={blog.authorName}
            uploadDate={blog.uploadDate}
            tags={blog.tags}
            category={blog.category}
            id={blog._id}
            />
          ))}
      </div>

      <NewsLetter/>
      
    </div>
    </div>
  )
}

export default About