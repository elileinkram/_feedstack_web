class Post {

    constructor(postID, hashtags, numberOfViews, userComments, userReactions, numberOfPeopleThisHasMade, whenWasThisCreated) {

        // type: string
        // description: a unique id to identify the post
        this.postID = postID;

        // type: Set <string>
        // description: hashtags that the author has included in the caption 
        // e.g. {'brooklyn', 'manhattanbound', '3am'}
        this.hashtags = hashtags;

        // type: number
        // description: how many users have seen this post
        this.numberOfViews = numberOfViews;

        // type: Set <string>
        // description: userIDs of ppl who have commented on this post
        this.userComments = userComments;

        // type: Set <string>
        // description: userIDs of ppl who have reacted to this post
        this.userReactions = userReactions;

        // type: Map <string, number>
        // description: number of people this post has made happy, sad or angry
        // example: {'happy' : 369, 'sad' : 73, 'angry' : 18}  
        this.numberOfPeopleThisHasMade = numberOfPeopleThisHasMade;

        // type: number
        // description: when was this post created, in millisecondsSinceEpoch
        this.whenWasThisCreated = whenWasThisCreated;

    }

}