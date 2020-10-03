// "Show me posts of dogs that make people happy"

module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0;

        const hashtags = post.hashtags;

        if (hashtags.has('dog') || hashtags.has('puppy') || hashtags.has('puppies')) {

            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy');

            ranking = numberOfPeopleThisHasMadeHappy + 1;

        }

        return ranking;

    }

};
