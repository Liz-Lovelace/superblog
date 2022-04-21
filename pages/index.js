import Link from 'next/link';

export default function index() {
  return <>
    <p>
      Тут будет список постов : )
    </p>
    <Link href='/posts/1'>
      <a>
        Единственная готовая страница
      </a>
    </Link>
  </>
}