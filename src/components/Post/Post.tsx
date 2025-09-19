import style from "./Post.module.css"
import { Comment } from "../Comments/Comment";
import { Avatar } from "../Avatar/Avatar";
import { ptBR  } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";



interface ContentLine {
    type: 'paragraph' | 'link';
    content?: string;
    description?: string;
}

interface AuthorProps {
    
    author: {
        name: string,
        role: string,
        avatarUrl: string,
        linkedin?: string
    };
    
    type: string;
    content: ContentLine[];
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

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true,
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
           
                <time title={publishedDateFormatted} dateTime={new Date(publishedAt).toISOString()} className="">{publishedDateRelativeToNow}</time>
            </header>
            <div className={style.content}>
                {content.map((line,i) => {
                    if (line.type === 'paragraph') {
                        return (
                            <p key={i} className="">{line.content}</p>
                        )
                    }
                    else if (line.type === 'link') {
                        return <p key={i}><a href="#">{line.description}</a></p>;
                    }
                })}

                {/* <p className="">Fala pessoal 👋</p>
                <p className="">{content}</p>
                <p className="">
                    Acesse e deixe seu feedback 👉
                    <a>{author.linkedin}</a>
                </p>
                <p className="">
                    <a>#uiux</a>{''}
                    <a>#userexperience</a>{''}
                </p> */}
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