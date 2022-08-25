import "./global.css"
import {Post} from './components/post/Post';
import styles from './App.module.css'
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import postsGenerator from "./util/postsGenerator.js";

const posts = postsGenerator();

function App() {
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    )
}

export default App
