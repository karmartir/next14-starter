import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      {post.img &&  <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>}
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.body}
          {/* I developed an internet store project, creating an intuitive and
          responsive user interface using HTML, CSS, JavaScript and React.
          Implemented features include product listings, shopping cart
          functionality, and secure checkout processes. */}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
