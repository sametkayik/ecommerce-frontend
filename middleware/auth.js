export default function ({store, redirect, route}) {
    if (route.path.startsWith('/my-account') && !store.state.auth.token) {
        return redirect('/login')
    }

    if (route.path.startsWith('/product') && !store.state.auth.token) {
        return redirect('/login')
    }

    if (route.path.startsWith('/cart') && !store.state.auth.token) {
        return redirect('/login')
    }

    if (route.path.startsWith('/checkout') && !store.state.auth.token) {
        return redirect('/login')
    }

    if (store.state.auth.token && route.name === 'login') {
        return redirect('/')
    }

    if (store.state.auth.token && route.name === 'register') {
        return redirect('/')
    }
}