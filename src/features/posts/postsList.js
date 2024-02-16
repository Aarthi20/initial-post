import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectAllPosts , getPostsStatus, getPostsError, fetchPosts} from './postsSlice';
import PostsExcerpts from './PostsExcerpts';


const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts); // (state) => state.posts
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() =>{
        if(postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if(postStatus === "loading"){
        content = <p>Loading...</p>
    }else if(postStatus === "succeeded"){
        const orderedPosts = posts.slice().sort((a, b) =>b.date.localeCompare(a.date)); // based on time ago it will be displayed in sorting order(newly addred post is first)
        //list of posts
        content= orderedPosts.map(post => <PostsExcerpts key={post.id} post={post}/>)
    }else if(postStatus ==="failed"){
        content = <p>{error}</p>
    }
    
    return(
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList