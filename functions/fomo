module.exports = {

    computeRanking: function (author, post, reader) {

        if (reader.hasViewedPost) {

            return 0;

        }

        return reader.commentsFromPeopleTheReaderFollows.size + reader.reactionsFromPeopleTheReaderFollows.size;

    }

};
