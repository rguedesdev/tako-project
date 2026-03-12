// Style Sheet CSS
import styles from "./comments.module.css";

function Comments() {
  return (
    <section className={styles.comentsSection}>
      <h3 className={styles.title}>Deixe seu comentário</h3>
      <textarea
        className={styles.textArea}
        placeholder="Escreva seu comentário aqui..."
        name=""
        id=""
      ></textarea>

      <ul className={styles.commentsList}>
        <li className={styles.comment}>
          <article>
            <header className={styles.commentHeader}>
              <img
                src="/avatar.jpg"
                alt="Foto de perfil de João"
                className={styles.avatar}
              />

              <div>
                <strong>João</strong>
                <time dateTime="2026-03-12T10:30">12/03/2026 às 10:30</time>
              </div>
            </header>

            <p className={styles.commentText}>Esse capítulo foi muito bom!</p>
          </article>
        </li>
      </ul>
    </section>
  );
}

export { Comments };
