class Reader {

    constructor(readerID, isFollowing, myReactions, myComments, myViews, authorID, post) {

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
        this.hasViewedPost = myViews.get('posts').get('madeBy').get(authorID).has(post.postID)

        // type: Set <string>
        // description: userIDs of people the reader follows who have also commented on this post
        this.commentsFromPeopleTheReaderFollows = new Set([...post.userComments].filter(userID => isFollowing.has(userID)))

        // type: Set <string>
        // description: userIDs of people the reader follows who have also reacted to this post
        this.reactionsFromPeopleTheReaderFollows = new Set([...post.userReactions].filter(userID => isFollowing.has(userID)))

    }

}
