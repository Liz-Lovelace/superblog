import Head from 'next/head';
import MainTitle from '../../components/post/MainTitle';
import P from '../../components/post/P';
import styles from '../../components/post/Post.module.css';

export default function PostPage({title, children}){
  return <div className={styles.post}>
    <Head>  
      <title> Superblog </title>
    </Head>
    <P> MENU </P>
    <MainTitle>  {title} </MainTitle>
    <article>
      {children}
    </article>
    <P> newwwsletterrrr </P>
    <P> here are more posts for you to enjoy :) </P>
  </div>
}