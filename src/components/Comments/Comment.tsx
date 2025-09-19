import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment() {
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
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon,parabens!</p>
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