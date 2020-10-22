// "Show me posts I have not yet seen, that my friends dig"

module.exports = {

    computeRanking: function (author, post, reader) {
        
        let ranking = 0;

        if (reader.hasViewedPost) {

            return 0;

        }
        
        const numberOfComments = reader.numberOfCommentsFromPeopleTheReaderFollows;
        
        const numberOfReactions = reader.numberOfReactionsFromPeopleTheReaderFollows;
        
        ranking = numberOfComments + numberOfReactions;
        
        return ranking;

    }

};
