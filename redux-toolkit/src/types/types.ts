export interface Movie {
  id: number;
  name: string;
}
export interface MovieState {
  movies: Movie[];
  loading?: boolean;
  error?: string;
}
