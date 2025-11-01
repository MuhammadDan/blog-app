import Slug from "@/component/Slug"


export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  return {
    title: 'YourBlog - ' + slug.split("-").join(" ")
  }
}

// 2
const SlugRoute = async ({params}) => {
  const res = await fetch(`${process.env.SERVER}/api/blog/${params.slug}`)// ye blog ka data lane kai liye
  const data = await res.json() // ye blog ka data hai
  console.log(params.slug);
  
    
  return (
    <div>
       <Slug title={params.slug} blogdata={data}/>
    </div>
  )
}

export default SlugRoute

// 1

export const generateStaticParams = async ()=>{
   const res = await fetch(`${process.env.SERVER}/api/blog/slug-list`)//
   const data = await res.json()
  //  console.log(data);
  const x = data.map((item)=>({
    slug: item
  }))
  // console.log(x)
  return x  
}