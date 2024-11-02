'use client';
import { useEffect, useState } from 'react';
import { initIndexedDB } from 'indexdb'; // Função para inicializar IndexedDB com Yjs
import *  as Y from 'yjs'; // Importando Yjs
import styles from './page.module.css'; // Importe o CSS para aplicar estilos

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [yDoc, setYDoc] = useState(null); // Estado para armazenar o documento Yjs

    // Inicializa o IndexedDB com Yjs
    useEffect(() => {
        const init = async () => {
            const doc = new Y.Doc();
            const db = await initIndexedDB(doc); // Inicializa o IndexedDB e associa ao Yjs
            setYDoc(doc);
        };
        init();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        // Valida o email
        if (!validateEmail(email)) {
            alert("E-mail inválido!");
            return;
        }

        // Adiciona os dados do usuário ao Yjs
        if (yDoc) {
            const userData = {
                email,
                username,
                password
            };
            const users = yDoc.getMap('users'); // Obtém o mapa de usuários
            users.set(username, userData); // Armazena os dados do usuário no mapa

            alert("Registro bem-sucedido! Faça login.");
            window.location.href = '/login';
        }
    }

    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit} className={styles.main}>
                <h1>Registrar</h1>
                <input
                    className={styles['input-field']}
                    type="text"
                    placeholder="Nome de Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className={styles['input-field']}
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={styles['input-field']}
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className={styles.button} type="submit">Registrar</button>
            </form>
        </div>
    );
}
