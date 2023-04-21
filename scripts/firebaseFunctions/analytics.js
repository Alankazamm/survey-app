import { getAllSurveys } from "./app";
/*
account status options (status):
1. I have not created an account yet.
2. My account status is okay.
3. I'm currently having financial issues.

market options(market):
1. stock market
2. foreign exchange
3. commodity
4. bond market
5. cryptocurrency market

invest options(invest):
1. I have not invested yet.
2. My bank's manager advices me.
3. I flip a coin

resources options(resources):
1. Books and articles
2. YouTube tutorial videos
3. online or face to face courses
4. experience with little investment

details text area(details):
free text

*/
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["NOT_CREATED"] = "I have not created an account yet.";
    AccountStatus["OKAY"] = "My account status is okay.";
    AccountStatus["FINANCIAL_ISSUES"] = "I'm currently having financial issues.";
})(AccountStatus || (AccountStatus = {}));
var Market;
(function (Market) {
    Market["STOCK"] = "stock market";
    Market["FOREIGN_EXCHANGE"] = "foreign exchange";
    Market["COMMODITY"] = "commodity";
    Market["BOND"] = "bond market";
    Market["CRYPTOCURRENCY"] = "cryptocurrency market";
})(Market || (Market = {}));
var Invest;
(function (Invest) {
    Invest["NOT_INVESTED"] = "I have not invested yet.";
    Invest["BANK_MANAGER"] = "My bank's manager advices me.";
    Invest["FLIP_COIN"] = "I flip a coin";
})(Invest || (Invest = {}));
const surveys = await getAllSurveys();
//1. Average age per market
export const averageMarketperAge = {
    "stock market": 0,
    "foreign exchange": 0,
    "commodity": 0,
    "bond market": 0,
    "cryptocurrency market": 0
};
const getAverageMarketperAge = () => {
    //get the average age for each market individually
    let averageAgeStock = 0;
    let averageAgeForeignExchange = 0;
    let averageAgeCommodity = 0;
    let averageAgeBond = 0;
    let averageAgeCryptocurrency = 0;
    let countStock = 0;
    let countForeignExchange = 0;
    let countCommodity = 0;
    let countBond = 0;
    let countCryptocurrency = 0;
    surveys.forEach(survey => {
        switch (survey.market) {
            case Market.STOCK:
                averageAgeStock += parseInt(survey.age);
                countStock++;
                break;
            case Market.FOREIGN_EXCHANGE:
                averageAgeForeignExchange += parseInt(survey.age);
                countForeignExchange++;
                break;
            case Market.COMMODITY:
                averageAgeCommodity += parseInt(survey.age);
                countCommodity++;
                break;
            case Market.BOND:
                averageAgeBond += parseInt(survey.age);
                countBond++;
                break;
            case Market.CRYPTOCURRENCY:
                averageAgeCryptocurrency += parseInt(survey.age);
                countCryptocurrency++;
                break;
        }
    });
    averageMarketperAge[Market.STOCK] = averageAgeStock / countStock;
    averageMarketperAge[Market.FOREIGN_EXCHANGE] = averageAgeForeignExchange / countForeignExchange;
    averageMarketperAge[Market.COMMODITY] = averageAgeCommodity / countCommodity;
    averageMarketperAge[Market.BOND] = averageAgeBond / countBond;
    averageMarketperAge[Market.CRYPTOCURRENCY] = averageAgeCryptocurrency / countCryptocurrency;
    return;
};
getAverageMarketperAge();
//2. Account status
export const accountStatus = {
    "I have not created an account yet.": 0,
    "My account status is okay.": 0,
    "I'm currently having financial issues.": 0,
};
surveys.forEach(survey => {
    switch (survey.status) {
        case AccountStatus.NOT_CREATED:
            accountStatus[AccountStatus.NOT_CREATED]++;
            break;
        case AccountStatus.OKAY:
            accountStatus[AccountStatus.OKAY]++;
            break;
        case AccountStatus.FINANCIAL_ISSUES:
            accountStatus[AccountStatus.FINANCIAL_ISSUES]++;
            break;
    }
});
//3. Resources utilized to train by Market
export const marketResources = {
    "stock market": {
        "Books and articles": 0,
        "YouTube tutorial videos": 0,
        "online or face to face courses": 0,
        "experience with little investment": 0
    },
    "foreign exchange": {
        "Books and articles": 0,
        "YouTube tutorial videos": 0,
        "online or face to face courses": 0,
        "experience with little investment": 0
    },
    "commodity": {
        "Books and articles": 0,
        "YouTube tutorial videos": 0,
        "online or face to face courses": 0,
        "experience with little investment": 0
    },
    "bond market": {
        "Books and articles": 0,
        "YouTube tutorial videos": 0,
        "online or face to face courses": 0,
        "experience with little investment": 0
    },
    "cryptocurrency market": {
        "Books and articles": 0,
        "YouTube tutorial videos": 0,
        "online or face to face courses": 0,
        "experience with little investment": 0
    }
};
surveys.forEach(survey => {
    switch (survey.market) {
        case Market.STOCK:
            // market[Market.STOCK]++;
            survey.resources.forEach(resource => {
                marketResources[Market.STOCK]["Books and articles"] += resource === "Books and articles" ? 1 : 0;
                marketResources[Market.STOCK]["YouTube tutorial videos"] += resource === "YouTube tutorial videos" ? 1 : 0;
                marketResources[Market.STOCK]["online or face to face courses"] += resource === "online or face to face courses" ? 1 : 0;
                marketResources[Market.STOCK]["experience with little investment"] += resource === "experience with little investment" ? 1 : 0;
            });
            break;
        case Market.FOREIGN_EXCHANGE:
            // market[Market.FOREIGN_EXCHANGE]++;
            survey.resources.forEach(resource => {
                marketResources[Market.FOREIGN_EXCHANGE]["Books and articles"] += resource === "Books and articles" ? 1 : 0;
                marketResources[Market.FOREIGN_EXCHANGE]["YouTube tutorial videos"] += resource === "YouTube tutorial videos" ? 1 : 0;
                marketResources[Market.FOREIGN_EXCHANGE]["online or face to face courses"] += resource === "online or face to face courses" ? 1 : 0;
                marketResources[Market.FOREIGN_EXCHANGE]["experience with little investment"] += resource === "experience with little investment" ? 1 : 0;
            });
            break;
        case Market.COMMODITY:
            // market[Market.COMMODITY]++;
            survey.resources.forEach(resource => {
                marketResources[Market.COMMODITY]["Books and articles"] += resource === "Books and articles" ? 1 : 0;
                marketResources[Market.COMMODITY]["YouTube tutorial videos"] += resource === "YouTube tutorial videos" ? 1 : 0;
                marketResources[Market.COMMODITY]["online or face to face courses"] += resource === "online or face to face courses" ? 1 : 0;
                marketResources[Market.COMMODITY]["experience with little investment"] += resource === "experience with little investment" ? 1 : 0;
            });
            break;
        case Market.BOND:
            // market[Market.BOND]++;
            survey.resources.forEach(resource => {
                marketResources[Market.BOND]["Books and articles"] += resource === "Books and articles" ? 1 : 0;
                marketResources[Market.BOND]["YouTube tutorial videos"] += resource === "YouTube tutorial videos" ? 1 : 0;
                marketResources[Market.BOND]["online or face to face courses"] += resource === "online or face to face courses" ? 1 : 0;
                marketResources[Market.BOND]["experience with little investment"] += resource === "experience with little investment" ? 1 : 0;
            });
            break;
        case Market.CRYPTOCURRENCY:
            // market[Market.CRYPTOCURRENCY]++;
            survey.resources.forEach(resource => {
                marketResources[Market.CRYPTOCURRENCY]["Books and articles"] += resource === "Books and articles" ? 1 : 0;
                marketResources[Market.CRYPTOCURRENCY]["YouTube tutorial videos"] += resource === "YouTube tutorial videos" ? 1 : 0;
                marketResources[Market.CRYPTOCURRENCY]["online or face to face courses"] += resource === "online or face to face courses" ? 1 : 0;
                marketResources[Market.CRYPTOCURRENCY]["experience with little investment"] += resource === "experience with little investment" ? 1 : 0;
            });
            break;
    }
});
//4. Account Status by Insvest's Decision
export const invest = {
    "I have not invested yet.": {
        "My account status is okay.": 0,
        "I'm currently having financial issues.": 0
    },
    "My bank's manager advices me.": {
        "My account status is okay.": 0,
        "I'm currently having financial issues.": 0
    },
    "I flip a coin": {
        "My account status is okay.": 0,
        "I'm currently having financial issues.": 0
    }
};
surveys.forEach(survey => {
    switch (survey.invest) {
        case Invest.NOT_INVESTED:
            switch (survey.status) {
                case AccountStatus.OKAY:
                    invest[Invest.NOT_INVESTED][AccountStatus.OKAY]++;
                    break;
                case AccountStatus.FINANCIAL_ISSUES:
                    invest[Invest.NOT_INVESTED][AccountStatus.FINANCIAL_ISSUES]++;
                    break;
            }
            break;
        case Invest.BANK_MANAGER:
            switch (survey.status) {
                case AccountStatus.OKAY:
                    invest[Invest.BANK_MANAGER][AccountStatus.OKAY]++;
                    break;
                case AccountStatus.FINANCIAL_ISSUES:
                    invest[Invest.BANK_MANAGER][AccountStatus.FINANCIAL_ISSUES]++;
                    break;
            }
            break;
        case Invest.FLIP_COIN:
            switch (survey.status) {
                case AccountStatus.OKAY:
                    invest[Invest.FLIP_COIN][AccountStatus.OKAY]++;
                    break;
                case AccountStatus.FINANCIAL_ISSUES:
                    invest[Invest.FLIP_COIN][AccountStatus.FINANCIAL_ISSUES]++;
                    break;
            }
            break;
    }
});
//5. Common words in the details field
const stopwords = ["o", "a", "de", "para", "em", "com", "é", "e", "ou", "que", "como", "a", "on", "the", "in", "of", "i", "he", "it", "no"];
//create an array bellow with the following structure [ [word, count], [word, count], [word, count] ] where word is a string and count is a number
const commonWords = [];
surveys.forEach(survey => {
    const text = survey.details?.toLowerCase();
    if (text) {
        const words = text.split(" ");
        words.forEach(word => {
            if (!stopwords.includes(word) && word.length < 10) {
                commonWords.push(word);
            }
        });
    }
});
let wordCount = {};
//create a wordCount object with the same keys as the commonWords array and for each key create a property with the value 0
commonWords.forEach(word => {
    wordCount[word] = 0;
});
//count the number of times each word appears in the commonWords array and update the wordCount object
commonWords.forEach(word => {
    wordCount[word]++;
});
export const words = wordCount;
//6. Market through time
//create data for line chart with each investment Market type growth by the date, how much people surveiled stock market in march 23, then in april for example
const investmentByDate = {
    [Market.FOREIGN_EXCHANGE]: {},
    [Market.STOCK]: {},
    [Market.COMMODITY]: {},
    [Market.BOND]: {},
    [Market.CRYPTOCURRENCY]: {}
};
//date format: "16/4/2023 14:1:42", just use the month and year
Object.keys(investmentByDate).forEach(market => {
    let accumulatedInvestment = {};
    surveys.forEach(survey => {
        const date = survey.date?.split(" ")[0];
        if (date) {
            const previousInvestment = accumulatedInvestment[date] || 0;
            const newInvestment = survey.market === market ? 1 : 0;
            accumulatedInvestment[date] = previousInvestment + newInvestment;
            investmentByDate[market][date] = accumulatedInvestment[date];
        }
    });
});
export const investmentByDateData = investmentByDate;
