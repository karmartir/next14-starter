import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUsersForm/adminUserForm";

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
            <AdminPostForm />
        </div>
      </div>
      
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.column}>
            <AdminUserForm />
        </div>
      </div>
      AdminPage
    </div>
  );
};
export default AdminPage;
