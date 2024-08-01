import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO na Rocketseat",
        },
        content: [
            {
                type: "paragraph",
                content: "Fala galeraa 👋 ",
            },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                content: "jane.design/doctorcare",
            },
        ],
        publishedAt: new Date("2024-08-01 08:13:30"),
    },

    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            role: "Educator",
        },
        content: [
            {
                type: "paragraph",
                content: "Fala galeraa 👋 ",
            },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                content: "jane.design/doctorcare",
            },
        ],
        publishedAt: new Date("2024-04-07 14:20:30"),
    },
];

export function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </>
    );
}
