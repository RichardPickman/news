export type settingsOptions = { [k: string]: unknown };

export type settingsEndpoint = unknown;

export type callbackType<T> = (data?: T) => void;

export type callbackArgument = sourcesRequest | newsRequest | null;

export type sourcesData = HTMLElement[];

export type resType = Response;

export type sourceType = { id: string; name: string };

export type newsType = {
    source: sourceType;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type newsRequest = {
    status: string;
    totalResults: number;
    articles: newsType[];
};

export type sourcesRequest = {
    status: string;
    sources: sourcesItems[];
};

export type sourcesItems = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};
