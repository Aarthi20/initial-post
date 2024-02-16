import {useSelector} from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {

    const posts = useSelector(selectAllPosts); // (state) => state.posts

    const orderedPosts = posts.slice().sort((a, b) =>b.date.localeCompare(a.date)); // based on time ago it will be displayed in sorting order(newly addred post is first)

    //list of posts
    const renderAllPosts = orderedPosts.map(post => ( // replace posts with orderedPosts
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post = {post}/>
        </article>
    ))

    return(
        <section>
            <h2>Posts</h2>
            {renderAllPosts}
        </section>
    )
}
export default PostsList