import Article from "@/component/Article"

export const metadata = {
  title: "Article"
}

export const revalidate = 86400; // yai 60 sec kai bad data ko revalidate kar dai ga or http pai request karega

const articleRoute = async() => {
  //  const blogdata = await fetch('http://localhost:3000/api/blog')
  const blogdata = await fetch(`${process.env.SERVER}/api/blog`,  {cache:'no-cache'})
    const bdata = await blogdata.json(); // ismai wo data hi jo apka server data daiga
    console.log("routing mai data",bdata);
    return (
      <>
      <Article bldata={bdata}/>
      </>
      )
}

export default articleRoute