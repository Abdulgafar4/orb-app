// Authenticated by default
export default {
    login: ({ username, password }) => {
        if (username === 'orb' && password === 'abdulrauf') {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('role');
            localStorage.setItem('login', 'orb');
            localStorage.setItem('user', 'Admin');
            localStorage.setItem(
                'avatar',
                'data:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0srMeYDswvR105qA8JfqIOYPiYHu2tY-qA&usqp=CAU'            
     );
            return Promise.resolve();
        }
        if (username === 'Abdul' && password === 'aa11ss22') {
            localStorage.setItem('role', 'user');
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('login', 'user');
            localStorage.setItem('user', 'Management');
            localStorage.setItem(
                'avatar',
                'data:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0srMeYDswvR105qA8JfqIOYPiYHu2tY-qA&usqp=CAU'
                            );
            return Promise.resolve();
        }
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('role', 'admin');
            localStorage.removeItem('not_authenticated');
            localStorage.setItem('login', 'admin');
            localStorage.setItem('user', 'Dennis Nedry');
            localStorage.setItem(
                'avatar',
            //     'data:image/jpeg;base64,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'
            // 
            );
            return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    },
    logout: () => {
        localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        localStorage.removeItem('login');
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
    },
    getIdentity: () => {
        return {
            id: localStorage.getItem('login'),
            fullName: localStorage.getItem('user'),
            // avatar: localStorage.getItem('avatar'),
        };
    },
};
