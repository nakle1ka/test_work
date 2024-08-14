import React from 'react';
import axios from 'axios';
import { Metadata } from 'next';

import { Title } from '@/components/ui/title/title';
import { PostType } from '../types/types';
import { PostCard } from '@/components/postCard/postCart';
import { PostPagination } from '@/components/postPagination/postPagination';

import getSeoConfig from '@/lib/seo';

import styles from './posts.module.scss'

type Props = {
    searchParams: {
        page: string;
    };
}

export const metadata: Metadata = {
    ...getSeoConfig("All posts", "On this page you can view all posts")
};

const postTotal = 100;
const postLimit = 10;
const postPages = Math.ceil(postTotal / postLimit);

async function fetchPosts(page: number = 1, limit: number = postLimit) {
    const response = await axios.get<PostType[]>(
        `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * limit}&_limit=${limit}`,
    );

    return response.data;
}

const Posts: React.FC<Props> = async ({ searchParams }) => {

    const posts = await fetchPosts(parseInt(searchParams.page))

    return (
        <div className={styles.container}>
            <Title text='Posts' />

            {posts.map(el =>
                <PostCard
                    className={styles.post}
                    userLogin={el.userId}
                    title={el.title}
                    body={el.body}
                    postId={el.id}
                />
            )}

            <PostPagination
                totalPages={postPages}
                currentPage={parseInt(searchParams.page)}
                nextPage={parseInt(searchParams.page) + 1}
                prevPage={parseInt(searchParams.page) - 1}
            />

        </div>
    );
}

export default Posts