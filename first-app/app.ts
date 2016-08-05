import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes++;
    }

    voteDown(): void {
        this.votes--;
    }

    domain(): string {
        try {
            return this.link.split('//')[1].split('/')[0].replace('www.', '');
        }
        catch (err) {
            return null;
        }
    }
}
@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    templateUrl: './article.component.html',
    host: {
        class: 'row'
    }
})
class ArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: './app.html'
})
class RedditApp {
    articles: Article[];

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 10),
            new Article('Fullstack', 'http://fullstack.io', 5),
        ]
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        if (title.value && link.value) {
            console.log(`Adding article title: ${title.value} and link: ${link.value}.`);
            this.articles.push(new Article(title.value, link.value, 0));
            title.value = '';
            link.value = '';
        }
    }
}

bootstrap(RedditApp);
