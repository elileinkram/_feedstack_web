// "Show me posts of dogs that make people happy"

module.exports = {

    computeRanking: function (author, post, reader) {

        let ranking = 0;

        const hashtags = post.hashtags;

        if (hashtags.includes('dog') || hashtags.includes('puppy') || hashtags.includes('puppies')) {

            const numberOfPeopleThisHasMadeHappy = post.numberOfPeopleThisHasMade.get('happy');

            ranking = numberOfPeopleThisHasMadeHappy + 1;

        }

        return ranking;

    }

};
