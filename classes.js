`
A post enters the feed. The person who made the post is the author. The person viewing the post is the reader.

The reader is of type Reader.
The author is of type Author.
The post is of type Post.

Each post has a value. That value is computed by the computeRanking function. (which you can change)
The higher the value the 'higher up' the post will show in the feed. 

If the returned value is not positive, the post will not be included in the feed. (even at the bottom)

`

class Author {

    constructor(authorID, isFollowing, readerID) {

        // type: string
        // description: a unique id to identify the author
        this.authorID = authorID;

        // type: boolean
        // description: checks if the author is following the reader
        this.isFollowingReader = isFollowing.has(readerID);

    }

}

class Reader {

    constructor(readerID, isFollowing, myReactions, myComments, myViews, authorID, postID) {

        // type: string
        // description: a unique id to identify the reader
        this.readerID = readerID;

        // type: boolean
        // description: checks if the reader is following the author
        this.isFollowingAuthor = isFollowing.has(authorID);

        // type: number
        // description: number of times the reader has reacted to posts that were made by the author
        this.numberOfTimesReaderHasReactedTo = myReactions.get('posts').get('madeBy').get(authorID).size;

        // type: number
        // description: number of times the reader has commented on posts that were made by the author 
        this.numberOfTimesReaderHasCommentedOn = myComments.get('posts').get('madeBy').get(authorID).size;

        // type: number
        // description: number of times the reader has viewed posts that were made by the author
        this.numberOfTimesReaderHasViewed = myViews.get('posts').get('madeBy').get(authorID).size;

        // type: boolean
        // description: checks if the reader has seen this post
        this.hasViewedPost = myViews.get('posts').get('madeBy').get(authorID).has(postID)

    }

}

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

`

3 Things to have in mind...

1. computeRanking should return a number
2. Use map.get(key) to retrieve a value (no indexing)
3. Some of the variables might be zero (watch out for 1 / 0)

`

module.exports = {

    computeRanking: function (author, reader, post) {

        // change this...

        let ranking = 0;

        ranking = post.numberOfPeopleThisHasMade.get('happy') - post.numberOfPeopleThisHasMade.get('sad');

        const moreSadThanHappy = ranking < 0;

        if (moreSadThanHappy) {
            return -1;
        }

        const readerIsFriendsWithAuthor = reader.isFollowingAuthor && author.isFollowingReader;

        if (readerIsFriendsWithAuthor) {
            ranking = 20 * ranking;
        }
        else if (reader.isFollowingAuthor) {
            ranking = 10 * ranking;
        }

        if (reader.hasViewedPost) {
            ranking = ranking * 0.1;
        }

        const millisecondsInOneWeek = 604800000;
        const millisecondsSinceEpochFromWhenAppWasCreated = 1601394272406;

        const timeBoost = (1 + 1 / 3) ** ((post.whenWasThisCreated - millisecondsSinceEpochFromWhenAppWasCreated) / millisecondsInOneWeek);

        ranking = ranking * timeBoost;

        return ranking;

    }

};