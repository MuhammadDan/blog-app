import Home from '@/component/Home';
export const metadata = {
  title: "Homepage"
}
export default async function Homepage() {
  const blogdata = await fetch('http://localhost:3000/api/blog')
  const bdata = await blogdata.json(); // ismai wo data hi jo apka server data daiga
  console.log("routing mai data",bdata);
  return (
    <>
    <Home bldata={bdata}/>
    </>
  )
}
