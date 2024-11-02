// app/page.js
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"; // Importar Link do Next.js

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Bem-vindo ao Syncer</h1>
                <p>Gerencie suas finanças de forma prática e rápida.</p>

                <div className={styles.ctas}>
                    <Link href="/login" className={styles.primary}>
                        Acessar
                    </Link>
                    <Link href="/register" className={styles.secondary}>
                        Registrar-se
                    </Link>
                </div>
            </main>
        </div>
    );
}
