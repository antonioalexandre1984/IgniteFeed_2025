import './styles.css'
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';
import style from "./App.module.css"

// author :{avartar_url:"", name:"", role:""}
// publishedAt: Date
// content: String[]

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v",
      name: "Fulano de Tal",
      role: "Developer"
    },
    publishedAt: new Date("2025-09-20 20:00:00"),
    content: {
      text: "Primeiro post de exemplo sobre React e componentização.",
      socialMedia: ["LinkedIn", "GitHub"],
      hashtags: ["#react", "#javascript", "#frontend"]
    }
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/87654321?v",
      name: "Maria Silva",
      role: "UI Designer"
    },
    publishedAt: new Date("2025-09-21 10:30:00"),
    content: {
      text: "Design de interfaces vai além da estética, envolve experiência.",
      socialMedia: ["Instagram", "Dribbble"],
      hashtags: ["#design", "#ux", "#ui"]
    }
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/11223344?v",
      name: "João Souza",
      role: "DevOps Engineer"
    },
    publishedAt: new Date("2025-09-21 15:00:00"),
    content: {
      text: "Automatização de deploys garante mais agilidade e segurança.",
      socialMedia: ["Twitter", "LinkedIn"],
      hashtags: ["#devops", "#automation", "#cloud"]
    }
  }
];



export function App() {
  return (
    <div >
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main className={style.main}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              text={post.content.text}
              socialMedia={post.content.socialMedia}
              hashtags={post.content.hashtags}
            />
          ))}
        </main>

      </div>       
    </div>

  )
}



