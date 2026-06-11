export interface GalleryItem {
  id: string;

  title: string;

  category:
    | "clinic"
    | "before-after"
    | "equipment"
    | "team";

  image: string;

  alt: string;
}