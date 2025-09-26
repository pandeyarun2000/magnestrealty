import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for magnest a ai powered property manager.
        default: "Magnest - AI Powered Property Management",
        template: `%s | Magnest`
    },
    description: "Magnest is an AI powered property management SaaS that helps you build your property management pipeline and generate leads for real estate transactions effortlessly!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Magnest - AI Powered Property Manager",
        description: "Magnest is an AI powered property manager that helps manage your clients property!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "magnest",
        title: "Magnest - AI Powered Property Manager",
        description: "Magnest is an AI powered property manager that helps manage your clients property!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://magnest-app.vercel.app"),
};
