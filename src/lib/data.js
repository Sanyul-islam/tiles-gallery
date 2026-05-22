export const TilesData = async() => {

    const Promise = await fetch(
      "https://tiles-gallery-git-main-imsanyulislam-1529s-projects.vercel.app/data.json",
    );
    const data = await Promise.json();
    return data;
}