export interface Movie {
  id: number;
  title: string;
  season?: string;
  image_path: string;
  tags?: string[];
  the_movie_fav?: boolean;
}
