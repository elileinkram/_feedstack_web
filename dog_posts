module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0

        const hashtags = post.hashtags


        if (hashtags.has('dog') || hashtags.has('dogs')) {

            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy')

            const numberOfPeopleTheReaderFollowsWhoReactedToThisPost = reader.reactionsFromPeopleTheReaderFollows.size

            ranking = numberOfPeopleThisHasMadeHappy * numberOfPeopleTheReaderFollowsWhoReactedToThisPost

        }

        return ranking;

    }

};
