import styles from "./contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt='contact image' fill/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="First and Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="email" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea> 
          <button>Send</button>
        </form>
      </div>


    </div>
  )
}
export default ContactPage;