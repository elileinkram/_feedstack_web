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
