/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post(prop) {
    const [comments, setComments] = useState([1, 2]);

    const publishedDateFormatted = format(
        prop.publishedAt,
        "dd 'de' MMMM 'às' HH:mm",
        {
            locale: ptBR,
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(prop.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, comments.length + 1]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={prop.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{prop.author.name}</strong>
                        <span>{prop.author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={prop.publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {prop.content.map((line) => {
                    if (line.type === "paragraph") {
                        return <p>{line.content}</p>;
                    }

                    if (line.type === "link") {
                        return (
                            <p>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map(() => {
                    return <Comment />;
                })}
            </div>
        </article>
    );
}
