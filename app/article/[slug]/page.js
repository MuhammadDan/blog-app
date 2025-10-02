import Slug from "@/component/Slug"

export const generateMetadata = ({params})=>{
    return {
        title: 'YourBlog - '+params.slug.split("-").join(" ")
    }

}

const SlugRoute = ({params}) => {
    
  return (
    <div>
       <Slug title={params.slug}/>
    </div>
  )
}

export default SlugRoute