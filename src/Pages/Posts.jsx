import React, {useEffect, useState} from 'react';
import {usePosts} from "../components/hooks/usePost";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/ UI/button/MyButton";
import MyModal from "../components/ UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/ UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/ UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFiler] = useState({sort: '', query: '',});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalPages = response.headers['x-total-count']
        setTotalPages(getPageCount(totalPages, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFiler}
            />
            {postError &&
                <h1> Произошла ошибка ${postError} </h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
            }
            <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
        </div>
    );
}

export default Posts;
