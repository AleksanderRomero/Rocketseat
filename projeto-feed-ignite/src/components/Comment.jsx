import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1720396800&semt=ais_user"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Frederico Macedo</strong>
                            <time
                                title="11 de Maio às 08:13"
                                dateTime="2022-05-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Aleksander! Parábens!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
