export const TilesData = async() => {

    const Promise = await fetch(
      "https://tiles-gallery-lilac-seven.vercel.app/data.json",
    );
    const data = await Promise.json();
    return data;
}