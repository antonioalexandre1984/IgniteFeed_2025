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
    author: 
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
        name: "John Doe",
        role: "Backend Developer",
        linkedin: "johndoe123"
      }
    ,
    publishedAt: "2025-09-18T14:30:00Z",
    content: [
      {
        type: "paragraph" as "paragraph",
        content: "Entusiasta de automação e open source. Sempre em busca de melhorar o processo de desenvolvimento."
      },
      {
        type: "link" as "link",
        content: "https://github.com/johndoe123",
        description: "Confira meu perfil"
      }
    ]
  },
  {
    author: 
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/23456789?v=4",
        name: "Jane Doe",
        role: "Backend Engineer",
        linkedin: "janedoe456"
      }
    ,
    publishedAt: "2025-09-17T09:00:00Z",
    content: [
      {
        type: "paragraph" as "paragraph",
        content: "Especialista em back-end. Gosto de construir sistemas escaláveis e eficientes."
      },
      {
        type: "link" as "link",
        content: "https://github.com/janedoe456",
        description: "Acesse meu repositório"
      }
    ]
  },
  {
    author: 
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/34567890?v=4",
        name: "Mike Developer",
        role: "Frontend Developer",
        linkedin: "devmike789"
      }
    ,
    publishedAt: "2025-09-16T17:45:00Z",
    content: [
      {
        type: "paragraph" as "paragraph",
        content: "Desenvolvedor frontend apaixonado por JavaScript e React. Sempre em busca de novos desafios."
      },
      {
        type: "link" as "link",
        content: "https://github.com/devmike789",
        description: "Veja meus projetos"
      }
    ]
  },
  {
    author: 
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/45678901?v=4",
        name: "Lucas Martins",
        role: "Cybersecurity Analyst",
        linkedin: "lucasmartins101"
      }
    ,
    publishedAt: "2025-09-15T12:20:00Z",
    content: [
      {
        type: "paragraph" as "paragraph",
        content: "Trabalho com segurança cibernética, focado em testes de penetração e segurança em redes."
      },
      {
        type: "link" as "link",
        content: "https://github.com/lucasmartins101",
        description: "Dê uma olhada no meu trabalho"
      }
    ]
  },
  {
    author: 
      {
        avatarUrl: "https://avatars.githubusercontent.com/u/56789012?v=4",
        name: "Carolina Silva",
        role: "AI Engineer",
        linkedin: "carolinasilva202"
      }
    ,
    publishedAt: "2025-09-14T10:10:00Z",
    content: [
      {
        type: "paragraph" as "paragraph",
        content: "Desenvolvedora de IA. Estou sempre trabalhando em novos projetos de aprendizado de máquina."
      },
      {
        type: "link" as "link",
        content: "https://github.com/carolinasilva202",
        description: "Acesse meus repositórios de IA"
      }
    ]
  }
];



export function App() {
  return (
    <div >
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main className={style.main}>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
              type={post.content[1].type}
              description={post.content[1].description}
            />
          ))}
        </main>

      </div>       
    </div>

  )
}



