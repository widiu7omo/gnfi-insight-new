type MetaDataProps =
    {
        title?: string, description?: string, imgSrc?: string
    }
export const generateOgMetaData = ({ title, description, imgSrc }: MetaDataProps) => {
    return [
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: description
        },
        {
            property: "og:image:type",
            content: "image/jpeg"
        },
        {
            property: "og:image:width",
            content: "1920"
        },
        {
            property: "og:image:height",
            content: "1080"
        },
        {
            property: "og:image",
            content: imgSrc
        }
    ]
}

export const generateTwitterMetadata = ({ title, description, imgSrc }: MetaDataProps) => {
    return [
        {
            name: "twitter:title",
            content: title
        },
        {
            name: "twitter:description",
            content: description
        },
        {
            name: "twitter:image:type",
            content: "image/jpeg"
        },
        {
            name: "twitter:image:width",
            content: "1920"
        },
        {
            name: "twitter:image:height",
            content: "1080"
        },
        {
            name: "twitter:image",
            content: imgSrc
        }
    ]
}