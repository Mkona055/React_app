
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const { data:blogs,isPending, error} = useFetch('http://localhost:8000/blogs');
   
    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) =>blog.id !== id );
        setBlogs(newBlogs);
    }*/
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div className="blog-details">Chargement des posts...</div>}
           {blogs && <BlogList blogs= {blogs} title = "Tous les posts" />}
           
        </div>
     );
}
 
export default Home;