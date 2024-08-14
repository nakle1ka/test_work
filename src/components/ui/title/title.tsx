import React from 'react';
import styles from './title.module.scss'

type Props = {
    text: string;
    size?: string;
}

export const Title: React.FC<Props> = ({ text, size = "h1" }) => {
    return (
        <>
            {size === "h1" && <h1 className={[styles.title, styles.h1].join(" ")}>{text}</h1>}
            {size === "h2" && <h2 className={[styles.title, styles.h2].join(" ")}>{text}</h2>}
        </>
    );
}