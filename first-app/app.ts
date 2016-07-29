import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">
                <div class="field">
                    <label for="title">Title</label>
                    <input type="text" name="title" />
                </div>
                <div class="field">
                    <label for="link">Link</label>
                    <input type="text" name="link" />
                </div>
            </h3>
        </form>
    `
})
class RedditApp {
    constructor() {
    }
}

bootstrap(RedditApp);
