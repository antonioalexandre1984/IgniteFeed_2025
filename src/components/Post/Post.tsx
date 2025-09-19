
import style from "./Post.module.css"
import { Comment } from "../Comments/Comment";
import { Avatar } from "../Avatar/Avatar";



interface AuthorProps {
    
    author: {
        name: string,
        role: string,
        avatarUrl: string,
        linkedin?: string
    };
    
    type: string;
    content: string;
    description?: string;
    publishedAt: string;
}


export function Post({ author, type, content, description, publishedAt }: AuthorProps) {
    const publishedDateFormatted = new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <article className={style.post}>
            <header className="">
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}/>
              
                <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
           
                <time title="15 de Setembro de 2025 as 15:27" dateTime="15-09-2025 15:27:00" className="">{publishedDateFormatted}</time>
            </header>
            <div className={style.content}>
                <p className="">Fala pessoal 👋</p>
                <p className="">{content}</p>
                <p className="">
                    Acesse e deixe seu feedback 👉
                    <a>{author.linkedin}</a>
                </p>
                <p className="">
                    <a>#uiux</a>{''}
                    <a>#userexperience</a>{''}
                </p>
            </div>
            <form className={style.commentForm}>
                <strong className="">Deixe seu feedback</strong>
                <textarea className="" placeholder="Deixe seu comentário"/>
                <button type="submit" className="">Comentar </button>
            </form>
         
            <Comment />
            <Comment />
            <Comment />
        </article>
    )
}