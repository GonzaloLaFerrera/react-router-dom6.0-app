import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Blog = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if(loading) return <p>Loading data...</p>;
    if(error) return <p>Error....</p>;

    const handleChange = (e) => {
        console.log('change');

        const filter = e.target.value;
        setSearchParams({filter: filter});
    };

    return (
        <>
            <h1 className="fw-normal">Blog</h1>
            <input 
                className="form-control mb-2 mt-2" 
                type="text" 
                value={searchParams.get('filter' || '')} 
                onChange={handleChange}
            />           
            <ul className="list-group">
                {
                    data
                        .filter((item) => {
                            let filter = searchParams.get('filter');
                            if (!filter) return true;
                            let name = item.title.toLowerCase();
                            return name.startsWith(filter.toLowerCase())
                        })
                        .map((item) => (
                            <Link 
                                to={`/blog/${item.id}`} 
                                className="list-group-item" 
                                key={item.id}
                            >
                                {item.id} - {item.title}
                            </Link>
                        ))
                }
            </ul>
        </>
    );
};

export default Blog;