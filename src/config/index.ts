import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for magnest realty.
        default: "Magnest Realty Inc., Brokerage",
        template: `%s | Magnest`
    },
    description: "Magnest Realty is a real estate brokerage in Ontario",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Magnest Realty Inc., Brokerage",
        description: "Magnest Realty is a real estate brokerage in Ontario",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "magnest",
        title: "Magnest Realty Inc., Brokerage",
        description: "Magnest Realty is a real estate brokerage in Ontario",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://magnest-app.vercel.app"),
};
