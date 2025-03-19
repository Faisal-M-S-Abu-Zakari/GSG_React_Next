// لما كتبت اسم الملف ضفت حرف ال دي و ذلك ليصبح الملف تلقائيا معمول اله اكسبورت
declare namespace News {
  // الداتا تايب يلي داخل ال result
  // هان اخدت بس يلي بدي اياه منه
  export interface IResponseNewsItem {
    article_id: string;
    description: string;
    title: string;
    image_url: string;
  }

  // الداتا تايب يلي بيوفرها ال API
  export interface IResponse {
    status: string;
    totalResults: string;
    results: IResponseNewsItem[];
  }

  // هان الداتا تايب للعنصر , كيف بدك تخزنه عندك
  export interface Item {
    id: string;
    title: string;
    img: string | null;
    content: string;
  }
}

export interface ICategory {
  title: string;
  subtitle: string;
  imageURL: string;
}

export interface ICategory {
  title: string;
  subtitle: string;
  imageURL: string;
}

export interface Item_ {
  id?: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  content: string;
  author: string;
  author_email: string;
  date: number;
  category: string;
}

export interface Item_ {
  id?: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  content: string;
  author: string;
  author_email: string;
  date: number;
  category: string;
}

export interface IUser {
  email: string;
  password?: string;
  role: string;
  displayName: string;
}
