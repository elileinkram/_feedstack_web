// "Show me posts that few people have seen"

module.exports = {

    computeRanking: function (author, post, reader) {

        const numberOfPeopleWhoHaveSeenThisPost = post.numberOfViews;

        return 1 / (numberOfPeopleWhoHaveSeenThisPost + 1);

    }

};
