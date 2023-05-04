const getUsers = async () => {
    const response = await fetch(url1);
    return response.json();

}