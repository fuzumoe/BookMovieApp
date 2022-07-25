const baseUrl = 'http://127.0.0.1:8085'
export const login = async (email, password) => {
    try {
        const params = window.btoa(`${email.value}:${password.value}`);
        const rawResponse = await fetch(`${baseUrl}/api/v1/auth/login`, {

            body: JSON.stringify(params),
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                authorization: `Basic ${params}`
            }

        });

        const result = await rawResponse.json();

        if (rawResponse.ok) {

            window.sessionStorage.setItem('user-details', JSON.stringify(result));
            window.sessionStorage.setItem('access-token', rawResponse.headers.get('access-token'))
            window.location.href = './boards.html'

        } else {
            const error = new Error();
            error.message = result.message || 'Something went wrong.';
            throw error;
        }
    } catch (e) {
        alert(`Error: ${e.message}`);
    }
}


export const signUp = async (firstName, lastName, email, password, mobile) =>{

  }
