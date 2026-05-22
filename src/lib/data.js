export const TilesData = async() => {

    const Promise = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data.json`
    );
    const data = await Promise.json();
    return data;
}