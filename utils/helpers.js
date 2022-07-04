module.exports = {
    getName: (input) => {
            return input.gameName;    
    },
    getSoloRank: (input) => {
        return input.soloDuoRank;
    },
    getFlexRank: (input) => {
        return input.flexRank;
    },
    getRole: (input) => {
        if(input == '1'){
            return true;
        };
    },
    diamondCheck: (input) => {
        if((input.soloDuoRank == 'Diamond') || (input.flexRank == '')) {
            return true;
        };
    },
    // displayRole: (input) => {
    //     if(input == '1'){
    //         return true;
    //     };
    // }
}