import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

import styles from "./page.module.scss";
import { Metadata } from "next";
import getSeoConfig from "@/lib/seo";

// Я не разобрался как адекватно применять next-seo вместе с AppRouter`ом
export const metadata: Metadata = {
  ...getSeoConfig("Get started", "This is main page of my app")
};

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
          <SquarePen size={55} className={styles.icon} />
          <h1 className={styles.text}>Get started</h1>
        </div>

        <Link href="/posts?page=1">
          <Button className={styles.button}>Go to posts</Button>
        </Link>
      </div>
  );
}
