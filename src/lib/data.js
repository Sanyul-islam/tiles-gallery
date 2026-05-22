export const TilesData = async() => {

    const Promise = await fetch("http://localhost:3000/data.json");
    const data = await Promise.json();
    return data;
}