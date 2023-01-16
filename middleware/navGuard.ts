export default function ({ route, redirect }: { route: any, redirect: any }) {
    const user = localStorage.getItem('loggedIn');
    if (user) { // logged in user
        if (route.path === '/auth') {
            redirect('/');
        }
    } else { // logged out user
        if (route.path !== '/auth') {
            redirect('/auth');
        }
    }
} 