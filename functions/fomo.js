// Show me posts that I have missed, but my friends have not

module.exports = {

    computeRanking: function (author, post, reader) {
        
        let ranking = 0;

        if (reader.hasViewedPost) {

            return ranking;

        }
        
        const numberOfComments = reader.numberOfCommentsFromPeopleTheReaderFollows;
        
        const numberOfReactions = reader.numberOfReactionsFromPeopleTheReaderFollows;
        
        ranking = numberOfComments + numberOfReactions;
        
        return ranking;

    }

};
