import styles from './PostBody.module.css';

export default function PostBody({children}){
  return <article className={styles.postBody}>
    {children}
  </article>
}