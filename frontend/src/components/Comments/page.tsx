// Imports Principais
import Image from "next/image";

// Styles Sheet CSS
import styles from "./comments.module.css";

// Imagens
import Kon from "../../../public/kon.jpg";

const mockComments = [
  {
    id: 1,
    author: "negatrom",
    time: "há 6 h",
    text: "mano. é early one piece. é galhofa para um caralho mesmo.",
    replies: [
      {
        id: 2,
        author: "Thin-Limit7697",
        time: "há 3 h",
        text: "O Live Action ainda me pareceu menos galhofa que o anime...O Live Action ainda me pareceu menos galhofa que o anime...O Live Action ainda me pareceu menos galhofa que o anime...O Live Action ainda me pareceu menos galhofa que o anime...O Live Action ainda me pareceu menos galhofa que o anime...O Live Action ainda me pareceu menos galhofa que o anime...",
        replies: [
          {
            id: 3,
            author: "Seasoned_Flour",
            time: "há 7 h",
            text: "O anime é galhofa, o que você esperava? Esse é o charme.",
            replies: [],
          },
          {
            id: 4,
            author: "User_Zero",
            time: "há 2 h",
            text: "Exato! Se não tivesse a galhofa, não seria One Piece.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    author: "Kaizoku_Fan",
    time: "há 10 h",
    text: "Alguém mais achou que o Zoro ficou muito sério?",
    replies: [
      {
        id: 6,
        author: "Luffy_King",
        time: "há 8 h",
        text: "O Zoro sempre foi o mais sério do bando, cara.",
        replies: [
          {
            id: 7,
            author: "Sanji_Simp",
            time: "há 5 h",
            text: "Concordo, mas no começo ele era mais pistola com todo mundo kkkkk",
            replies: [
              {
                id: 8,
                author: "Kaizoku_Fan",
                time: "há 4 h",
                text: "Pode crer, é verdade.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    author: "GrandLine_Tourist",
    time: "há 1 h",
    text: "Só passando pra deixar um alô pra tripulação!",
    replies: [],
  },
];

function CommentItem({ comment, isLast = false }) {
  return (
    <div className={styles.commentWrapper}>
      <li className={styles.comment}>
        <article className={styles.commentContent}>
          <div className={styles.avatarContainer}>
            <Image
              className={styles.profilePicture}
              src={Kon}
              alt="Profile Picture"
              width={50}
              height={50}
            />
          </div>

          <div className={styles.commentBody}>
            <div className={styles.commentMeta}>
              <strong>{comment.author}</strong>
              <time>{comment.time}</time>
            </div>
            <p className={styles.commentText}>{comment.text}</p>
          </div>
        </article>
      </li>

      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.repliesWrapper}>
          <ul className={styles.commentsList}>
            {comment.replies.map((reply, index) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                isLast={index === comment.replies.length - 1}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Comments() {
  return (
    <section className={styles.comentsSection}>
      <h3 className={styles.title}>Deixe seu comentário</h3>
      <textarea
        className={styles.textArea}
        placeholder="Escreva seu comentário aqui..."
      />
      <ul className={styles.commentsList}>
        {mockComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </section>
  );
}
