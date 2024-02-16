import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


const AddPostForm = () =>{

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const usersOption = users.map(user => (
       <option key={user.id} value = {user.id}>
        {user.name}
       </option>
    ))
    
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const onSavePostClicked = () => {
        if (title && content){
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('');
            setContent('');
        }
    }

    return(
        <section>
            <h2>Add New Post</h2>
            <form>
                <lable htmlForm="postTitle">Post Title:</lable>
                <input type="text" 
                id="postTitle" 
                name="postTitle"
                value= {title} onChange={onTitleChanged} />

                <lable htmlForm="postAuthor">Post Author:</lable>
                <select id="postAuthon" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOption}

                </select>

                <lable htmlForm="postContent">Post Content:</lable>
                <textarea type="text"
                 id="postContent" 
                 name="postTitle"
                value= {content} 
                onChange={onContentChanged} />

                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )

}

export default AddPostForm