declare namespace News {
  export interface IResponseNewsItem {
    article_id: string;
    description: string;
    title: string;
    image_url: string;
  }

  export interface IResponse {
    status: string;
    totalResults: string;
    results: string[];
  }

  export interface Item {
    id: string;
    title: string;
    img: string | null;
    content: string;
  }
}