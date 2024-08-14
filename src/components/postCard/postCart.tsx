import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
    userLogin: number;
    title: string;
    body: string;
    postId: number;
    isHaveButton?: boolean;

    className?: string;
}

export const PostCard: React.FC<Props> = ({ userLogin, title, body, postId, className = "", isHaveButton = true }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardDescription>Author: {userLogin}</CardDescription>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{body}</CardDescription>
            </CardHeader>

            {isHaveButton && (
                <CardContent>
                    <Link href={`/posts/${postId}`}>
                        <Button>Go to post</Button>
                    </Link>
                </CardContent>
            )}
        </Card>
    );
}