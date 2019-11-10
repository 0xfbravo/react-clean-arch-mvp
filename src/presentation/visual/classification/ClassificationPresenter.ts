import { ClassificationView } from "./ClassificationView";
import TweetModel from "../../model/TweetModel";
import UserModel from "../../model/UserModel";
import TagModel from "../../model/TagModel";

export class ClassificationPresenter {
    private view: ClassificationView

    constructor(view: ClassificationView) {
        this.view = view
    }

    classifyTweet() {
        // TODO: Update tweet classification
    }

    /**
     * Creates a mock user model
     */
    private newMockUserModel(): UserModel {
        return new UserModel((Math.floor(Math.random() * 10000) + 1).toString(), "Sir Algo", "https://tailwindcss.com/img/jonathan.jpg")
    }
    
    /**
     * Creates a mock tag model
     */
    private newMockTag(): TagModel {
        return new TagModel(Math.floor(Math.random() * 10000) + 1, `Tag ${(Math.floor(Math.random() * 10000) + 1).toString()}`, Math.floor(Math.random() * 10000) + 1)
    }

    getRandomTweet(): TweetModel {
        const tags = [...Array(Math.floor((Math.random() * 5) + 1))]
        tags.forEach((element, index) => {
            tags[index] = this.newMockTag()
        });
        const tweet = new TweetModel((Math.floor(Math.random() * 10000) + 1).toString(), `This is exhausting. Democrats blame:
        Russia
        Twitter
        YouTube
        Comey
        Jill Stein
        Wikileaks
        Antifa
        Millenials
        
        But the party won't look in the mirror and recognize that it has utterly failed to mount a meaningful challenge to social and economic injustice, & thus is losing support.`,
        new Date(),
        this.newMockUserModel(), tags)
        return tweet
    }
}
