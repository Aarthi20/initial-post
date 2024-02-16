import {useSelector} from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId})=>{
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);
    return(
        <div>
            <span>By {author ? author.name : 'Unknown Author'}</span>
        </div>
    )
}

export default PostAuthor