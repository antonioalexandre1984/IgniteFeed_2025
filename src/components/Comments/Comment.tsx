import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface CommentProps {
  contentComment: string;
  onDeleteComment: (comment: string) => void;
}



export function Comment({ contentComment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((likeCount) => {
      return likeCount + 1;
    });
  }

  // Delete comment
  console.log("Comment content: ", contentComment);
  function handleDeleteComment() {
    onDeleteComment(contentComment);
    console.log("Comentário deletado com sucesso!");
}

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/53489752?v=4"/>
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong className="">John Doe</strong>
              <time title="15 de Setembro de 2025 as 15:27" dateTime="15-09-2025 15:27:00" className="">publicado há 1h</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{contentComment}</p>
        </div>
        <footer>
          <button
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}