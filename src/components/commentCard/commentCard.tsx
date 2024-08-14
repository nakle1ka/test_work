import React from 'react';
import styles from './commentCard.module.scss'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

type Props = {
    userEmail: string;
    title: string;
    body: string;
}

export const CommentCard: React.FC<Props> = ({ userEmail, title, body }) => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <p className={styles.trigger}>{userEmail}</p>
            </HoverCardTrigger>
            <HoverCardContent>
                <h4>{title}</h4>
                <p>{body}</p>
            </HoverCardContent>
        </HoverCard>
    );
}