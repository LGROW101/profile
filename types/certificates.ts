// components/certificates.ts
export type Certificate = {
    id: string;
    title: string;
    imageUrl: string;
    link?: string;
}

export const certificates: Certificate[] = [
    {
        id: "1",
        title: "Certified Kubernetes Administrator",
        imageUrl: "/CKA.png",
        link: "https://www.credly.com/badges/cbe845c1-dee1-4b82-a435-979739b98a46/linked_in_profile"
    },
    {
        id: "2",
        title: "Certified Kubernetes Application Developer",
        imageUrl: "/CKAD.png",
        link: "https://www.credly.com/badges/d2aab657-238f-4b73-b4bf-97bd4a2dafa8/linked_in_profile"
    },
];