module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0;

        const hashtags = post.hashtags;

        if (hashtags.has('dog') || hashtags.has('dogs')) {

            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy');

            ranking = numberOfPeopleThisHasMadeHappy;

        }

        return ranking;

    }

};
