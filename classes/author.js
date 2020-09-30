// The person who makes the post...

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
