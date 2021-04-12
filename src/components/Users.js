

export const getUsers = async () => {
    const req = await fetch('https://randomuser.me/api/?results=2');
    const { results } = await req.json()
    window.myRes = results
    return results;
}


