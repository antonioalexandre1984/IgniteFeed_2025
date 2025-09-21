import style from "./Post.module.css"
import { Comment } from "../Comments/Comment";
import { Avatar } from "../Avatar/Avatar";
import { ptBR  } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import type { FormEvent } from "react";


interface AuthorProps {
    author: {
        name: string,
        role: string,
        avatarUrl: string,
    };
    text: string,
    socialMedia: string[];
    hashtags: string[];
    publishedAt: Date;
}

//const comments = string | number[];

export function Post({ author, text, socialMedia, hashtags, publishedAt }: AuthorProps) {
    const [comments,setComments] = useState([" "]);

    const [newCommentText, setNewCommentText] = useState("");
    // Format date
    const publishedDateFormatted = new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    // Relative date
    const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR ,
        addSuffix: true,
    });

    // Change new comment text
    function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }
    // Create new comment
    function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        //const formData = new FormData(event.currentTarget);
        //const newCommentTextD = formData.get("comment") as string;
        //if (!newCommentText.trim()) return;
        setComments([...comments, newCommentText]);
        console.log("Novo comentário criado: ", newCommentText);
        //event.currentTarget.reset();
        setNewCommentText("");
    }
    // Delete comment
    function deleteComment(comment: string) {
        console.log("Deletar comentário");
        const commentsWithoutDeletedOne = comments.filter(c => {
            return c !== comment
        });
        setComments(commentsWithoutDeletedOne);
    } 

    // Validação do campo de comentário
    function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                <p>{text}</p>

                {socialMedia.length > 0 && (
                    <p>
                        <strong>Redes sociais: </strong>
                        {socialMedia.map((sm, i) => (
                            <a key={i} href="#">
                                {sm}
                            </a>
                        ))}
                    </p>
                )}

                {hashtags.length > 0 && (
                    <p>
                        {hashtags.map((tag, i) => (
                            <a key={i} href="#">
                                {tag}
                            </a>
                        ))}
                    </p>
                )}
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
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong className="">Deixe seu feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    name="comment"
                    className=""
                    placeholder="Deixe seu comentário"
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <button
                    disabled={isNewCommentEmpty}
                    type="submit"
                    className=""
                >Publicar
                </button>
            </form>
            {comments.map((comment,id) => {
                return <Comment key={id} contentComment={comment} onDeleteComment={deleteComment} />
            }
            )}
        </article>
    )
}