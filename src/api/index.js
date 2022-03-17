const getAxies = async ({ owner, parts, classes, stages, numMystic, pureness, breedCount, hp, skill, speed, morale }) => {

    const criteriaObject = { parts, classes, stages, numMystic, pureness, breedCount, hp, skill, speed, morale };

    //deleting empty criteria properties
    if (criteriaObject.parts.length === 0 || criteriaObject.classes[0] === '') {
        delete criteriaObject.parts;
    }

    if (criteriaObject.classes.length === 0 || criteriaObject.classes[0] === '') {
        delete criteriaObject.classes;
    }

    if (criteriaObject.numMystic.length === 0) {
        delete criteriaObject.numMystic;
    }

    if (criteriaObject.pureness.length === 0) {
        delete criteriaObject.pureness;
    }

    if (criteriaObject.breedCount === null) {
        delete criteriaObject.breedCount;
    }

    if (criteriaObject.stages === null) {
        delete criteriaObject.stages;
    }

    try {
        const jsonRes = await fetch('https://graphql-gateway.axieinfinity.com/graphql',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    operationName: "GetAxieLatest",
                    variables: {
                        from: 0,
                        size: 10,
                        sort: "PriceAsc",
                        auctionType: "Sale",
                        owner: owner,
                        criteria: criteriaObject
                    },
                    query: "query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieRowData\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieRowData on Axie {\n  id\n  image\n  class\n  name\n  genes\n  owner\n  class\n  stage\n  title\n  breedCount\n  level\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\n\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  state\n  __typename\n}\n"
                })
            });

        const res = await jsonRes.json();

        return res;
    }

    catch (e) {
        console.log(e);
    }
};

export default getAxies;