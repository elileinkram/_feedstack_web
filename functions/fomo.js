module.exports = {

    computeRanking: function (author, post, reader) {
        
        let ranking = 0;

        if (reader.hasViewedPost) {

            return ranking;

        }
        
        const numberOfCommentsFromPeopleTheReaderFollows = reader.commentsFromPeopleTheReaderFollows.size;
        
        const numberOfReactionsFromPeopleTheReaderFollows = reader.reactionsFromPeopleTheReaderFollows.size;
        
        ranking = numberOfCommentsFromPeopleTheReaderFollows + numberOfReactionsFromPeopleTheReaderFollows;
        
        return ranking;

    }

};
