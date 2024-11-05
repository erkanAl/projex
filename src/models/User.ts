export interface User {
    id: number;
    username: string;
    role: 'student' | 'teacher' | 'admin';
}
