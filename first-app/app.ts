import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment">
            <h3 class="ui header"></h3>
            <div class="field">
                <label for="title">Title</label>
                <input type="text" name="title" #newTitle>
            </div>
            <div class="field">
                <label for="link">Link</label>
                <input type="text" name="link" #newLink>
            </div>

            <button className="ui positive right floated button" (click)="addArticle(newTitle, newLink)">
                Submit Link
            </button>
        </form>
    `
})
class RedditApp {
    constructor() {
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Addign article title: ${title.value} and link: ${link.value}.`);
    }
}

bootstrap(RedditApp);
