module.exports = {

    computeRanking: function (author, post, reader) {

        // change this...

        let ranking = 0;

        ranking = post.numberOfPeopleThisHasMade.get('happy') - post.numberOfPeopleThisHasMade.get('sad');

        const moreSadThanHappy = ranking < 0;

        if (moreSadThanHappy) {
            return -1;
        }

        const readerIsFriendsWithAuthor = reader.isFollowingAuthor && author.isFollowingReader;

        if (readerIsFriendsWithAuthor) {
            ranking = 20 * ranking;
        }
        else if (reader.isFollowingAuthor) {
            ranking = 10 * ranking;
        }

        if (reader.hasViewedPost) {
            ranking = ranking * 0.1;
        }

        const millisecondsInOneWeek = 604800000;
        const millisecondsSinceEpochFromWhenAppWasCreated = 1601394272406;

        const timeBoost = (1 + 1 / 3) ** ((post.whenWasThisCreated - millisecondsSinceEpochFromWhenAppWasCreated) / millisecondsInOneWeek);

        ranking = ranking * timeBoost;

        return ranking;

    }

}
