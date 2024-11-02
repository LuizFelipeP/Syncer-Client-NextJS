'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa o useRouter do next/navigation
import { loginUser } from '../lib/apiClient';
import styles from './page.module.css'; // Importe o CSS para aplicar estilos

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Usar o useRouter

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await loginUser(email, password);
        if (response.success) {
            router.push('/dashboard'); // Navegar para o dashboard
        } else {
            alert(response.message);
        }
    }

    return (
        <div className={styles.page}> {/* Aplicando a classe page */}
            <form onSubmit={handleSubmit} className={styles.main}> {/* Aplicando a classe main */}
                <h1>Login</h1> {/* Adicionando um título ao formulário */}
                <input
                    type="email"
                    className={styles['input-field']} // Adicionando a classe input-field
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className={styles['input-field']} // Adicionando a classe input-field
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button}>Entrar</button>
                {/* Adicionando a classe button */}
            </form>
        </div>
    );
}
