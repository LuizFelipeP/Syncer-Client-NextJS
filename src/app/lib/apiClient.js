import crypto from 'crypto';

export async function registerUser({ email, username, password }) {
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password: hash }),
    });
    return response.json();
}

export async function loginUser(email, password) {
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: hash }),
    });
    return response.json();
}

export async function getExpenses() {
    const response = await fetch('/api/expenses');
    return response.json();
}

export async function addExpense(expense) {
    const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense),
    });
    return response.json();
}
