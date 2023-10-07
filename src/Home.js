import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
const {datas:blogs, isPending, error} = useFetch(' http://localhost:7000/blogs/ ')

 
    return ( 
        <div className="home">
        { error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>
}
        </div>
     );
}
 
export default Home;