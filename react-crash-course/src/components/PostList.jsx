
import classes from './PostList.module.css';
import Post from "./Post.jsx";
import {useLoaderData} from "react-router-dom";
function PostsList() {
    const posts = useLoaderData();
    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign : 'center', color: 'white'}}>
                    <h2>There are not Posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;