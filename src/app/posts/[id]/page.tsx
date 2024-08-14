import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import { PostType, CommentType } from '@/app/types/types';

import { PostCard } from '@/components/postCard/postCart';
import { Title } from '@/components/ui/title/title';
import { Button } from '@/components/ui/button';
import { CommentCard } from '@/components/commentCard/commentCard';

import styles from "./post.module.scss";

type Props = {
    params: {
        id: string;
    }
}

const fetchPostData = async (id: string) => {

    const postResponse = await axios.get<PostType>(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    const commentsResponse = await axios.get<CommentType[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    )
    //для подсказок
    const result: [PostType, CommentType[]] = [
        postResponse.data,
        commentsResponse.data,
    ]

    return result
}

const Post: React.FC<Props> = async ({ params }) => {
    const [post, comments] = await fetchPostData(params.id)

    let currentBackHref
    
    if (Number(params.id) <= 10) {
        currentBackHref = 1
    } else {
        currentBackHref = Math.ceil(Number(params.id) / 10)
    }

    return (
        <div className={styles.container}>

            <Link href={`/posts?page=${currentBackHref}`} className={styles.backBtn}>
                <Button>Back to posts</Button>
            </Link>

            <Title text={`Post#${params.id}`} />

            <div className={styles.content}>
                <PostCard
                    userLogin={post.userId}
                    title={post.title}
                    body={post.body}
                    postId={post.id}
                    isHaveButton={false}

                    className={styles.mainPost}
                />

                <div className={styles.commentsContainer}>
                    <Title text='Comments' size='h2'/>

                    <div className={styles.comments}>
                        {comments.map(el =>
                            <CommentCard 
                                userEmail={el.email}
                                title={el.name}
                                body={el.body}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post