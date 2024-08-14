type imageType = {
    url: string;
    alt: string;
}

const getSeoConfig = (
    title: string, 
    description: string,
    images: imageType[] = []
) => ({
    title: title + ' | PostsApp',
    description: description,
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: 'https://localhost:3000',
        site_name: 'PostsApp',
        images: images,
    },
});

export default getSeoConfig;