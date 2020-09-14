export const fetchTutorials = async () => {
    const response = await fetch("https://rayentutorialtestapp.azurewebsites.net/tutorials");
    return await response.json();
}

export const fetchTutorialByDescription = async (search) => {
    const response = await fetch(`https://rayentutorialtestapp.azurewebsites.net/tutorial?description=${search}`);
    return await response.json();
}