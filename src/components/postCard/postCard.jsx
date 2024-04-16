import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {

  return (
    <div className={styles.container}>
       <div className={styles.top}>
        <div className={styles.imgContainer}>
        <Image src='/project6.png' alt='' fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
         </div>
       <div className={styles.bottom}>
       <h1 className={styles.title}>Title</h1>
       <p className={styles.desc}>
I developed an internet store project, creating an intuitive and responsive user interface using HTML, CSS, JavaScript and React. Implemented features include product listings, shopping cart functionality, and secure checkout processes.</p>
       <Link href='/blog/post'>Read more...</Link> 
       </div>
    </div>
)}

export default PostCard
