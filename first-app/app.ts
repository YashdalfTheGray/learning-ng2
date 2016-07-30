import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    selector: 'reddit-article',
    templateUrl: './article.component.html',
    host: {
        class: 'row'
    }
})
class ArticleComponent {
    votes: number;
    title: string;
    link: string;

    constructor() {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp() {
        this.votes++;
        return false;
    }

    voteDown() {
        this.votes--;
        return false;
    }
}

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: './app.html'
})
class RedditApp {
    constructor() {
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        if (title.value && link.value) {
            console.log(`Adding article title: ${title.value} and link: ${link.value}.`);
        }
    }
}

bootstrap(RedditApp);
