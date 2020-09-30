module.exports = {

    computeRanking: function (author, post, reader) {

        if (reader.hasViewedPost) {

            return 0;

        }
        
        const numberOfCommentsFromPeopleTheReaderFollows = reader.commentsFromPeopleTheReaderFollows.size;
        
        const numberOfReactionsFromPeopleTheReaderFollows = reader.reactionsFromPeopleTheReaderFollows.size;
        
        const ranking = numberOfCommentsFromPeopleTheReaderFollows + numberOfReactionsFromPeopleTheReaderFollows;
        
        return ranking;

    }

};
