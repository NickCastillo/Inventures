export async function getMedicine() {
    try {
        const response = await fetch('https://private-anon-d65e049ebc-inventurestest.apiary-mock.com/products', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            });
        return await response.json();
    } catch (error) {
        console.log(error);
        return false
    }

}

export default getMedicine;