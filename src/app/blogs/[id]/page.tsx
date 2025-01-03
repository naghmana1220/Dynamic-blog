import Image from "next/image"
import { Clock ,UserPen} from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsLetter from "@/app/components/NewsLetter";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import CommentSection from "@/app/components/CommentSection";
import { notFound } from "next/navigation";
import BlogCard from "@/app/components/Blogcard";

export async function generateStaticParams() {


    const blogs = await client.fetch(`*[_type == "blog"]{_id}`)
    return blogs.map((blog: any) => {
        id: blog._id
    })
}

async function fetchBlog(id:string){
    const blog = await client.fetch(`*[_type == "blog" && _id == $id]`, {id})
    return blog[0]
}

async function Blog({params} : {params: {id: string}}) {

    const blog = await fetchBlog(params.id)

    const similarBlogs = await client.fetch(`*[_type == "blog"] | order(uploadDate desc)[0...4] {
        title,
        shortDescription,
        mainImage,
        tags,
        authorName,
        uploadDate,
        category,
        _id
      }`,{},{cache: "no-store"})


  if (!blog) {
    notFound()
  }

  return (
    <div className="max-w-[1000px] mx-auto px-3">
        {/* Main Image */}
        <div className="max-w-[1000px] h-[300px] mx-auto mt-[60px]">
            <Image src={urlFor(blog.mainImage).url()} alt="" width={950} height={300} className="object-fill w-full h-full rounded"></Image>
        </div>

        {/* Description*/}
        <div className="max-w-[600px] mx-auto">
            {/* Heading */}
            <h1 className="font-bold text-[28px] md:text-[32px] text-center md:text-left mt-7">{blog.title}</h1>

            {/* tags etc */}
            <div className="flex items-center flex-col sm:flex-row gap-3 justify-between mt-4">
                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#9BB848]">#{blog.tags[0]}</p>
                    <p className="text-[#48B8AA]">#{blog.tags[1]}</p>
                    <p className="text-[#B89F48]">#{blog.tags[2]}</p>
                </div>

                <div className="flex gap-2">
                    <div className='flex items-center gap-2'>
                        <UserPen />
                        <span>{blog.authorName}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Clock />
                        <span>{blog.uploadDate}</span>
                    </div>

                </div>
            </div>

        
            <div>


               

                <p className="mt-6 justify-center text-white"><h1 className="text-black text-2xl font-serif">Deep Learning and Machine learning in Artificial Intelligence</h1>
Deep learning is a transformative branch of artificial intelligence (AI) that mimics the neural architecture of the human brain through artificial neural networks. It excels in processing large volumes of data and extracting complex patterns, enabling machines to perform tasks that traditionally require human intelligence. Deep learning has become a cornerstone of AI, driving innovation in various fields such as healthcare, finance, entertainment, and autonomous systems.

How Deep Learning Works
At its core, deep learning relies on deep neural networks—multi-layered structures where each layer processes input data, extracts features, and passes them to the next layer. The network learns by adjusting the weights and biases of its connections based on errors detected during training. This process, called backpropagation, allows the model to minimize errors and improve its predictive accuracy.

The depth of the network—the number of layers—enables it to capture intricate patterns in data. For instance, in image recognition, early layers might detect edges and textures, while deeper layers identify shapes and objects. This hierarchical approach makes deep learning particularly effective for unstructured data like images, videos, text, and audio.

<h1 className="text-black text-2xl font-serif">Applications of Deep Learning</h1>
Deep learning has transformed AI by enabling machines to perform tasks previously considered impossible or impractical:

Computer Vision
Deep learning powers image recognition, object detection, and facial recognition systems. Applications include medical imaging for diagnosing diseases, autonomous vehicles for detecting road elements, and social media platforms for tagging users in photos.

<h1 className="text-black text-2xl font-serif">Natural Language Processing (NLP)</h1>
In NLP, deep learning drives advancements in language translation, sentiment analysis, and chatbots. Models like GPT (Generative Pre-trained Transformer) and BERT (Bidirectional Encoder Representations from Transformers) enable seamless human-computer communication.

Healthcare
Deep learning has revolutionized healthcare by analyzing medical images, predicting patient outcomes, and aiding drug discovery. It enhances diagnostic accuracy and supports personalized medicine.

**Autonomous

Vehicles**
Self-driving cars rely on deep learning to process data from cameras, LiDAR, and sensors. This technology enables tasks like object detection, lane recognition, and decision-making in real-time.

Speech Recognition and Synthesis
Virtual assistants like Siri and Alexa leverage deep learning for voice recognition and natural language understanding. Text-to-speech systems also use it to produce human-like voices.
Advantages of Deep Learning
Deep learning offers several advantages over traditional machine learning methods:

<h1 className="text-2xl text-black">Automated Feature Extraction</h1>
Unlike traditional methods requiring manual feature engineering, deep learning models automatically identify relevant features from raw data.
<br />
<h2 className="text-black">1- High Accuracy</h2> 
With sufficient data and computational resources, deep learning achieves state-of-the-art performance in tasks like image recognition and language translation.
<br/>
 <h2 className="text-black">2-  Scalability</h2>
Deep learning models scale effectively with larger datasets, making them suitable for modern, data-rich applications.
<br/>
 <h2 className="text-black">3- Challenges in Deep Learning</h2> 
Despite its potential, deep learning faces several challenges:
<br />
 <h2 className="text-black">4- Data Requirements</h2>
Training deep learning models requires vast amounts of labeled data, which can be expensive and time-consuming to collect.
<br />
 <h2 className="text-black">5- Computational Costs</h2>
Training and deploying deep neural networks demand substantial computational resources, including GPUs and specialized hardware.
<br />
<h2 className="text-black">6- Lack of Interpretability</h2>
Deep learning models function as black boxes, making it difficult to understand their decision-making processes.
<br />
 <h2 className="text-black">7- Overfitting</h2>
Complex models may overfit the training data, reducing their ability to generalize to new data.

<h1 className="text-black text-2xl font-serif">The Future of Deep Learning</h1>
Deep learning continues to evolve, with innovations such as transfer learning, federated learning, and explainable AI addressing current limitations. Its integration with other technologies like quantum computing and the Internet of Things (IoT) is expected to unlock new possibilities.

In summary, deep learning is a driving force in artificial intelligence, enabling machines to achieve human-like capabilities in complex tasks. As technology advances, deep learning will continue to shape the future of AI, enhancing efficiency, creativity, and problem-solving across industries.

</p>
            </div>


            <CommentSection blogId={params.id}/>
        </div>

        {/* Similar Posts */}
        <div className="max-w-[1000px] mx-auto px-3">
            {/* Heading */}
            <h1 className="font-bold mt-24 text-4xl md:text-5xl text-center md:text-left text-cyan-500 font-serif">MOST RECENT POSTS</h1>

            {/* Big Box */}
            <div className="mt-12 flex flex-col md:flex-row gap-5 lg:gap-14">
                {/* Blog Description */}
                <div className="px-2 md:px-0 flex flex-col items-center md:items-start">
                <h3 className="text-3xl text-center md:text-start">{similarBlogs[0].title}</h3>
                <p className="mt-2">{similarBlogs[0].uploadDate}</p>
                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#9BB848]">#{similarBlogs[0].tags[0]}</p>
                    <p className="text-[#48B8AA]">#{similarBlogs[0].tags[1]}</p>
                    <p className="text-[#B89F48]">#{similarBlogs[0].tags[2]}</p>
                </div>
                <p className="mt-6 text-center md:text-left leading-loose">{similarBlogs[0].shortDesc}</p>
                <div className="flex items-center gap-6 mt-4">
                    <div className='flex items-center gap-3'>
                        <UserPen />
                        <span>{similarBlogs[0].authorName}</span>
                    </div>
                    <span className='pr-4'>{similarBlogs[0].category}</span>
                </div>
                <Link href={`/blogs/${similarBlogs[0]._id}`}><Button variant={"link"} className='text-white text-lg p-0 mt-4'>Read More</Button></Link>
                </div>
                {/* Blog Image */}
                <div className="md:min-w-[400px] max-w-[500px] h-auto lg:h-[370px] mx-auto w-full hover:scale-105 duration-300 transition-all">
                    <Image src={urlFor(similarBlogs[0].mainImage).url()} alt="Blog Image" width={500} height={500} className="object-cover w-full h-full rounded-xl"></Image>
                </div>
            </div>

            {/* Multiple Boxes */}
            <div className="mt-14 flex flex-wrap md:flex-nowrap md:justify-start justify-center gap-4 lg:gap-12">
            {similarBlogs.slice(1).map((blog: any) => (
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
        </div>

         <NewsLetter/> 
    </div>
  )
}


export default Blog