module.exports = {

    computeRanking: function (author, post, reader) {
        
        let ranking = 0;

        if (reader.hasViewedPost) {

            return ranking;

        }
        
        const numberOfCommentsFromPeopleTheReaderFollows = reader.numberOfCommentsFromPeopleTheReaderFollows;
        
        const numberOfReactionsFromPeopleTheReaderFollows = reader.numberOfReactionsFromPeopleTheReaderFollows;
        
        ranking = numberOfCommentsFromPeopleTheReaderFollows + numberOfReactionsFromPeopleTheReaderFollows;
        
        return ranking;

    }

};
